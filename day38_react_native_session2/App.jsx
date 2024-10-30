import React, { useEffect, useState, useRef } from "react";
import { View, Animated, StyleSheet, StatusBar } from "react-native";
import IntroScreen from "./components/Intro";
import PortfolioScreen from "./components/Main";
import AboutMeScreen from "./components/AboutMe";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Intro"); // Tampilan layar saat ini

  // Animasi untuk efek fade dan translate
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    // Animasi fade in saat komponen dimount
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Animasi untuk translate down saat komponen dimount
    Animated.timing(translateYAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Timeout untuk mengatur transisi dari Intro ke Portfolio
    const introTimeout = setTimeout(() => {
      fadeOutAndTransition("Portfolio");
    }, 3000);

    // Timeout untuk mengatur transisi dari Portfolio ke Main
    const portfolioTimeout = setTimeout(() => {
      fadeOutAndTransition("Main");
    }, 8000);

    // Cleanup untuk clearTimeout
    return () => {
      clearTimeout(introTimeout);
      clearTimeout(portfolioTimeout);
    };
  }, []);

  // Fungsi untuk melakukan fade out dan transisi ke layar berikutnya
  const fadeOutAndTransition = (nextScreen) => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 50,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentScreen(nextScreen); // Set layar saat ini ke layar berikutnya
      translateYAnim.setValue(50); // Set nilai translate kembali ke awal
      fadeAnim.setValue(0); // Set nilai opacity kembali ke awal
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  return (
    <View style={styles.container}>
      {/* StatusBar transparan */}
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
      {/* View animasi untuk fade dan translate */}
      <Animated.View
        style={{
          ...styles.animatedContainer,
          opacity: fadeAnim,
          transform: [{ translateY: translateYAnim }],
        }}
      >
        {currentScreen === "Intro" && <IntroScreen />}
        {currentScreen === "Portfolio" && <PortfolioScreen />}
        {currentScreen === "Main" && <AboutMeScreen />}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  animatedContainer: {
    flex: 1,
  },
});
