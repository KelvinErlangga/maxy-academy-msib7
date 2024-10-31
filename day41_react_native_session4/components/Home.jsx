import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import Header from "./Header";
import Icon from "react-native-vector-icons/FontAwesome";

const Home = () => {
  // State untuk tab aktif, daftar todos, dan status kosong
  const [activeTab, setActiveTab] = useState("AllList");
  const [todos, setTodos] = useState([]);
  const [noData, setNoData] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    // Mendapatkan perubahan koleksi "todos" secara real-time
    const unsubscribe = onSnapshot(
      collection(db, "todos"),
      (querySnapshot) => {
        const todoData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Menentukan apakah tidak ada todos dan memperbarui status
        if (todoData.length === 0) {
          setNoData(true);
          return;
        } else {
          setNoData(false);
        }

        // Mengambil detail item pertama untuk setiap todo dan memperbarui state
        const itemsData = todoData.map((todo) => {
          onSnapshot(collection(db, "todos", todo.id, "items"), (itemsSnapshot) => {
            const itemsList = itemsSnapshot.docs.map((itemDoc) => ({
              id: itemDoc.id,
              ...itemDoc.data(),
            }));

            // Memperbarui label dan tanggal terakhir diedit berdasarkan item pertama
            const firstItem = itemsList[0] || {};
            setTodos((prevTodos) =>
              prevTodos.map((t) =>
                t.id === todo.id ? { ...t, label: firstItem.label || "No label", dateLastEdited: firstItem.dateLastEdited || "No date" } : t
              )
            );
          });
        });
        setTodos(todoData);
      },
      (error) => {
        console.error("Error fetching todos:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  // Navigasi ke layar detail dari item todo yang dipilih
  const handleTodoPress = (item) => {
    navigation.navigate("Detail", { todoId: item.id });
  };

  // Menghapus item todo dari Firestore
  const handleDeleteTodo = async (id) => {
    try {
      await deleteDoc(doc(db, "todos", id));
      console.log("Todo deleted successfully");
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  // Konfirmasi penghapusan dengan alert
  const confirmDelete = (id) => {
    Alert.alert(
      "Delete Todo",
      "Are you sure you want to delete this todo?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: () => handleDeleteTodo(id) },
      ],
      { cancelable: true }
    );
  };

  // Render setiap item todo dengan judul, kategori, tanggal, dan tombol hapus
  const renderTodoItem = ({ item }) => (
    <View style={[styles.todoItem, { backgroundColor: item.color || "#f9f9f9" }]}>
      <TouchableOpacity onPress={() => handleTodoPress(item)} style={{ flex: 1 }}>
        <Text style={styles.todoTitle}>{item.title}</Text>
        <View style={styles.todoInfo}>
          <Text style={styles.todoCategory}>{item.label}</Text>
          <Text style={styles.todoDate}>{item.dateLastEdited}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => confirmDelete(item.id)} style={styles.deleteButton}>
        <Icon name="trash" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header navigasi tab */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <View style={styles.contentContainer}>
        {/* Tampilkan status kosong jika tidak ada todos */}
        {noData ? (
          <View style={styles.emptyStateContainer}>
            <Image source={require("../assets/images/home.png")} style={styles.backgroundImage} />
            <Text style={styles.message}>Create your first to-do list...</Text>
          </View>
        ) : (
          // Render daftar todos
          <FlatList data={todos} renderItem={renderTodoItem} keyExtractor={(item) => item.id} contentContainerStyle={styles.listContainer} style={styles.flatListStyle} />
        )}

        {/* Tombol untuk navigasi ke layar NewList */}
        <TouchableOpacity style={styles.newListButton} onPress={() => navigation.navigate("NewList")}>
          <Text style={styles.newListButtonText}>+ New List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyStateContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: 384.17,
    height: 202,
    resizeMode: "contain",
  },
  message: {
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
    color: "#000",
    marginTop: 20,
    marginBottom: 28,
    textAlign: "center",
  },
  newListButton: {
    backgroundColor: "#000",
    paddingVertical: 14,
    paddingHorizontal: 26,
    borderRadius: 10,
    position: "absolute",
    bottom: 40,
  },
  newListButtonText: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "Poppins_700Bold",
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  flatListStyle: {
    maxHeight: 600,
    width: "100%",
    marginTop: 10,
    marginBottom: 110,
  },
  todoItem: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  todoTitle: {
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
    color: "#000",
  },
  todoInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  todoCategory: {
    backgroundColor: "#000",
    color: "#fff",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginRight: 10,
    fontFamily: "Poppins_400Regular",
  },
  todoDate: {
    fontSize: 16,
    color: "#000",
    fontFamily: "Poppins_400Regular",
  },
  deleteButton: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: "#ff4d4d",
    borderRadius: 5,
  },
});

export default Home;
