import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Menampilkan Logo Aplikasi */}
      <Image source={require("../assets/images/logo.png")} style={styles.logo} />
      {/* Judul Aplikasi */}
      <Text style={styles.title}>Dooit</Text>
      {/* Subjudul Aplikasi */}
      <Text style={styles.subtitle}>Write what you need{"\n"}to do. Everyday.</Text>
      {/* Tombol untuk melanjutkan ke layar Home */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 80.96,
    height: 64,
    marginTop: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 39,
    fontFamily: "Poppins_700Bold",
    color: "#FFF",
    marginTop: 18,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
    color: "#CCC",
    textAlign: "center",
    marginBottom: 163,
  },
  button: {
    backgroundColor: "#FFF",
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 56,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Poppins_700Bold",
    color: "#000",
    fontSize: 16,
  },
});

export default Welcome;
