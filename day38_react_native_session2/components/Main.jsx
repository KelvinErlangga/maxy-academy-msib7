import React from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";

const PortfolioScreen = () => {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/images/intro_logo.png")} style={styles.logo} />
      </View>
      <Text style={styles.title}>PORTFOLIO</Text>
      <Image source={require("../assets/images/statue.png")} style={styles.image} />
      <Image source={require("../assets/ring.gif")} style={styles.ring} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    position: "absolute",
    top: 0,
    alignItems: "center",
  },
  logo: {
    width: 315,
    height: 68,
    resizeMode: "contain",
    marginTop: 180,
    marginBottom: 5,
  },
  title: {
    color: "#988869",
    fontSize: 84,
    fontFamily: "Anton_400Regular",
    marginBottom: 180,
    zIndex: 1,
  },
  image: {
    width: 430,
    height: 540,
    resizeMode: "contain",
    position: "absolute",
    top: 360,
    zIndex: 2,
  },
  ring: {
    width: 498,
    height: 600,
    resizeMode: "contain",
    position: "absolute",
    top: 310,
    zIndex: 1,
  },
  decorativeLine: {
    position: "absolute",
    width: 100,
    height: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#D3B768",
    borderRightWidth: 2,
    borderRightColor: "#D3B768",
    borderRadius: 50,
    transform: [{ rotate: "-45deg" }],
    bottom: 100,
    right: 50,
  },
});

export default PortfolioScreen;
