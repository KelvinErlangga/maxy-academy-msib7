import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Logo dan Nama Aplikasi */}
      <View style={styles.header}>
        <Image source={require("../assets/images/logo-2.png")} style={styles.logo} />
        <Text style={styles.appName}>Dooit</Text>
      </View>

      {/* Tab Navigasi */}
      <View style={styles.tabContainer}>
        {/* Tab untuk All List */}
        <TouchableOpacity style={[styles.tab, activeTab === "AllList" && styles.activeTab]} onPress={() => setActiveTab("AllList")}>
          <Text style={activeTab === "AllList" ? styles.tabTextActive : styles.tabText}>All List</Text>
        </TouchableOpacity>
        {/* Tab untuk Pinned */}
        <TouchableOpacity style={[styles.tab, activeTab === "Pinned" && styles.activeTab]} onPress={() => setActiveTab("Pinned")}>
          <Text style={activeTab === "Pinned" ? styles.tabTextActive : styles.tabText}>Pinned</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 63,
    paddingHorizontal: 20,
    width: "100%",
  },
  logo: {
    width: 31.62,
    height: 26.37,
    marginRight: 8,
  },
  appName: {
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
    color: "#000",
  },
  tabContainer: {
    flexDirection: "row",
    marginTop: 40,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  tab: {
    paddingVertical: 16,
    paddingHorizontal: 71,
    backgroundColor: "#f0f0f0",
  },
  activeTab: {
    backgroundColor: "#000",
  },
  tabTextActive: {
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
    color: "#fff",
  },
  tabText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#bbb",
  },
});

export default Header;
