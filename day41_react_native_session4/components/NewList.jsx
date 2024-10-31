import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { db } from "../services/firebaseConfig";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

const NewList = ({ navigation }) => {
  // State untuk menyimpan data todo dan modal
  const [todos, setTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("Personal");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [listTitle, setListTitle] = useState("Title");
  const [listId, setListId] = useState("");

  const labels = ["Personal", "Work", "Finance", "Other"]; // Daftar label untuk todo

  const todosCollectionRef = collection(db, "todos");

  useEffect(() => {
    // Menambahkan list baru ke Firestore saat komponen dimuat
    const initializeNewList = async () => {
      const newListRef = await addDoc(todosCollectionRef, { title: listTitle });
      setListId(newListRef.id); // Menyimpan ID list baru
      setTodos([]);
    };

    initializeNewList();
  }, []);

  // Menambahkan todo baru ke Firestore
  const addTodo = async () => {
    if (newTodo.trim() && listId) {
      const newTodoItem = {
        text: newTodo,
        completed: false,
        label: selectedLabel,
        timestamp: Date.now(),
      };

      const todoRef = await addDoc(collection(db, "todos", listId, "items"), newTodoItem);

      setTodos((prevTodos) => [
        ...prevTodos,
        { id: todoRef.id, ...newTodoItem }, // Menambahkan todo baru ke state
      ]);
      setNewTodo("");
      setModalVisible(false);
    }
  };

  const toggleCompletion = (id) => {
    // Mengubah status penyelesaian todo
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const renderTodo = ({ item }) => (
    // Menampilkan setiap item todo
    <View style={styles.todoItem}>
      <TouchableOpacity onPress={() => toggleCompletion(item.id)}>
        <Ionicons name={item.completed ? "checkbox" : "square-outline"} size={24} color="black" />
      </TouchableOpacity>
      <Text style={[styles.todoText, item.completed && styles.completedText]}>{item.text}</Text>
    </View>
  );

  const saveListTitle = async () => {
    // Menyimpan judul list ke Firestore
    if (listTitle.trim()) {
      const listRef = doc(todosCollectionRef, listId);
      await setDoc(listRef, { title: listTitle }, { merge: true });
    }
  };

  return (
    <View style={styles.container}>
      {/* Menampilkan top bar dengan tombol kembali */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.pinButton}>
          <Text style={styles.pinButtonText}>📌 Pin</Text>
        </TouchableOpacity>
      </View>

      {/* Menampilkan input judul list atau menampilkannya */}
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

      {/* Menampilkan daftar todo */}
      <FlatList
        data={todos}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
            <Ionicons name="add-circle-outline" size={24} color="black" />
            <Text style={styles.addText}>To-do</Text>
          </TouchableOpacity>
        }
        contentContainerStyle={styles.listContent}
      />

      {/* Modal untuk menambahkan todo baru */}
      <Modal transparent visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput style={styles.input} placeholder="Enter to-do..." value={newTodo} onChangeText={setNewTodo} />
            <TouchableOpacity style={styles.modalAddButton} onPress={addTodo}>
              <Text style={styles.modalAddButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Menampilkan pilihan label untuk todo */}
      <Text style={styles.labelHeader}>Choose a label</Text>
      <View style={styles.labels}>
        {labels.map((label) => (
          <TouchableOpacity key={label} style={[styles.label, selectedLabel === label && styles.selectedLabel]} onPress={() => setSelectedLabel(label)}>
            <Text style={selectedLabel === label ? styles.labelTextSelected : styles.labelTextNormal}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
    fontFamily: "Poppins_400Regular",
    color: "#000",
  },
  header: {
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  titleInput: {
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  todoText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    marginLeft: 10,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  addText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    marginLeft: 5,
    color: "grey",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
  modalAddButton: {
    backgroundColor: "#000",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  modalAddButtonText: {
    color: "#fff",
    fontFamily: "Poppins_700Bold",
  },
  labelHeader: {
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
    marginBottom: 10,
    marginHorizontal: 20,
  },
  labels: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  label: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
  },
  labelTextNormal: {
    color: "#000",
    fontFamily: "Poppins_400Regular",
  },
  labelTextSelected: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
  selectedLabel: {
    backgroundColor: "#000",
  },
});

export default NewList;
