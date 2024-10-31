import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { db } from "../services/firebaseConfig";
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore";

const Detail = ({ navigation }) => {
  // State untuk menyimpan todos dan kontrol modal
  const [todos, setTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("Personal");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [listTitle, setListTitle] = useState("Title");
  const [listId, setListId] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);

  // Referensi ke koleksi Firestore untuk todos
  const todosCollectionRef = collection(db, "todos");

  // Mengambil todos dari Firestore saat komponen dimuat atau listId berubah
  useEffect(() => {
    const fetchTodos = async () => {
      if (listId) {
        const todosSnapshot = await getDocs(collection(db, "todos", listId, "items"));
        const todosList = todosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTodos(todosList);
      }
    };
    fetchTodos(); // Memanggil fungsi pengambilan
  }, [listId]); // Re-run efek ketika listId berubah

  // Mengambil list ID dan judul saat komponen dimuat
  useEffect(() => {
    const fetchListIdAndTitle = async () => {
      const todosSnapshot = await getDocs(todosCollectionRef);
      const todosList = todosSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // Buat list baru dengan judul default jika tidak ada
      if (todosList.length === 0) {
        const newListRef = await addDoc(todosCollectionRef, { title: listTitle });
        setListId(newListRef.id);
      } else {
        setListId(todosList[0].id);
        setListTitle(todosList[0].title);
      }
    };
    fetchListIdAndTitle();
  }, []);

  // Fungsi untuk menambah todo
  const addTodo = async () => {
    if (newTodo.trim() && listId) {
      const newTodoItem = {
        text: newTodo,
        completed: false,
        label: selectedLabel,
        timestamp: Date.now(),
      };
      // Menambah to-do ke sub-koleksi di Firestore
      const todoRef = await addDoc(collection(db, "todos", listId, "items"), newTodoItem);
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: todoRef.id, ...newTodoItem }, // Sertakan ID dokumen Firestore
      ]);
      setNewTodo("");
      setModalVisible(false);
    }
  };

  // Fungsi untuk mengedit todo
  const editTodo = async (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setNewTodo(todoToEdit.text);
    setEditingTodoId(id);
    setModalVisible(true);
  };

  // Fungsi untuk menyimpan todo yang diedit
  const saveEditedTodo = async () => {
    if (newTodo.trim() && editingTodoId) {
      const todoRef = doc(db, "todos", listId, "items", editingTodoId);
      await setDoc(todoRef, { text: newTodo }, { merge: true });
      // Memperbarui state lokal
      setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === editingTodoId ? { ...todo, text: newTodo } : todo)));
      setNewTodo("");
      setModalVisible(false);
      setEditingTodoId(null);
    }
  };

  // Fungsi untuk toggle status todo
  const toggleCompletion = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  // Render setiap item todo
  const renderTodo = ({ item }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity onPress={() => toggleCompletion(item.id)}>
        <Ionicons name={item.completed ? "checkbox" : "square-outline"} size={24} color="black" />
      </TouchableOpacity>
      <Text style={[styles.todoText, item.completed && styles.completedText]}>{item.text}</Text>
      <TouchableOpacity onPress={() => editTodo(item.id)}>
        <Ionicons name="pencil" size={24} color="black" style={styles.editIcon} />
      </TouchableOpacity>
    </View>
  );

  // Fungsi untuk menyimpan judul list
  const saveListTitle = async () => {
    if (listTitle.trim()) {
      const listRef = doc(todosCollectionRef, listId);
      await setDoc(listRef, { title: listTitle }, { merge: true });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.pinButton}>
          <Text style={styles.pinButtonText}>📌 Pin</Text>
        </TouchableOpacity>
      </View>

      {/* Judul List yang Dapat Diedit */}
      {isEditingTitle ? (
        <TextInput
          style={styles.titleInput}
          value={listTitle}
          onChangeText={setListTitle}
          onBlur={() => {
            setIsEditingTitle(false);
            saveListTitle();
          }}
          autoFocus
        />
      ) : (
        <TouchableOpacity onPress={() => setIsEditingTitle(true)}>
          <Text style={styles.header}>{listTitle}</Text>
        </TouchableOpacity>
      )}

      {/* FlatList dengan Tombol Tambah To-do di Bawah */}
      <FlatList
        data={todos}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              setNewTodo("");
              setEditingTodoId(null);
              setModalVisible(true);
            }}
          >
            <Ionicons name="add-circle-outline" size={24} color="black" />
            <Text style={styles.addText}>To-do</Text>
          </TouchableOpacity>
        }
        contentContainerStyle={styles.listContent}
      />

      {/* Modal untuk Menambah/Mengedit To-Do */}
      <Modal transparent visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput style={styles.input} placeholder="Enter to-do..." value={newTodo} onChangeText={setNewTodo} />
            <TouchableOpacity style={styles.modalAddButton} onPress={editingTodoId ? saveEditedTodo : addTodo}>
              <Text style={styles.modalAddButtonText}>{editingTodoId ? "Save" : "Add"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 54,
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  pinButton: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
  },
  pinButtonText: {
    fontSize: 12,
    color: "#000",
    fontFamily: "Poppins_400Regular",
  },
  header: {
    fontSize: 20,
    paddingHorizontal: 20,
    fontFamily: "Poppins_700Bold",
  },
  titleInput: {
    fontSize: 20,
    paddingHorizontal: 20,
    fontFamily: "Poppins_700Bold",
  },
  listContent: {
    paddingBottom: 80,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  addText: {
    fontSize: 16,
    marginLeft: 8,
    fontFamily: "Poppins_400Regular",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontFamily: "Poppins_400Regular",
  },
  modalAddButton: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  modalAddButtonText: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  todoText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
    fontFamily: "Poppins_400Regular",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
  editIcon: {
    marginLeft: 10,
  },
});

export default Detail;
