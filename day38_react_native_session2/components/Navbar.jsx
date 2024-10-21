import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native"; // Pastikan ActivityIndicator diimpor
import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";

const Navbar = ({ activeTab, setActiveTab }) => {
  // Load font
  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#c9ab78" />
      </View>
    );
  }

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => setActiveTab("AboutMe")} style={styles.navItem}>
        <Text style={[styles.navText, activeTab === "AboutMe" && styles.activeNavText]}>About Me</Text>
        {activeTab === "AboutMe" && <View style={styles.navIndicator} />}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setActiveTab("Experience")} style={styles.navItem}>
        <Text style={[styles.navText, activeTab === "Experience" && styles.activeNavText]}>Experience</Text>
        {activeTab === "Experience" && <View style={styles.navIndicator} />}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setActiveTab("Portfolio")} style={styles.navItem}>
        <Text style={[styles.navText, activeTab === "Portfolio" && styles.activeNavText]}>Portfolio</Text>
        {activeTab === "Portfolio" && <View style={styles.navIndicator} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#1c1c1e",
    marginTop: 48,
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "#7d7c7c",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Anton_400Regular",
    letterSpacing: 1,
  },
  activeNavText: {
    color: "#fff",
  },
  navIndicator: {
    width: 50,
    height: 2,
    backgroundColor: "#c9ab78",
    marginTop: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Navbar;
