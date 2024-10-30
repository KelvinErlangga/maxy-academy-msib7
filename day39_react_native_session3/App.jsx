import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home";
import Calculator from "./components/calculator/Calculator";
import BMICalculatorScreen from "./components/bmi_calculator/BmiCalculator";
import Weather from "./components/weather/Weather";
import Navbar from "./components/Navbar";
import Search from "./components/weather/Search";

const App = () => {
  const [activeScreen, setActiveScreen] = useState("Home");

  const renderScreen = () => {
    switch (activeScreen) {
      case "Calculator":
        return <Calculator />;
      case "BMI":
        return <BMICalculatorScreen />;
      case "Weather":
        return <Weather onNavigate={setActiveScreen} />;
      case "Search":
        return <Search onNavigate={setActiveScreen} />;
      default:
        return <Home />;
    }
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {renderScreen()}
        <Navbar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
