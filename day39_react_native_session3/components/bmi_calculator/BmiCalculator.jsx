import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Slider from "@react-native-community/slider";
import ResultScreen from "./Result";
import { calculateBMI, getBMICategory } from "./CalculateBMI";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";

export default function BMICalculatorScreen() {
  const [gender, setGender] = useState(null);
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(60);
  const [age, setAge] = useState(26);
  const [showResult, setShowResult] = useState(false);
  const [bmi, setBmi] = useState(0);
  const [status, setStatus] = useState("");

  const handleCalculateBMI = () => {
    const bmiValue = calculateBMI(weight, height, gender);
    setBmi(bmiValue);
    setStatus(getBMICategory(bmiValue, gender));
    setShowResult(true);
  };

  // Load fonts
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  // Ensure fonts are loaded before rendering the rest of the component
  if (!fontsLoaded) {
    return <View style={styles.loadingContainer}><Text style={styles.loadingText}>Loading...</Text></View>; // Add a loading state
  }

  if (showResult) {
    return <ResultScreen bmi={bmi} status={status} onRecalculate={() => setShowResult(false)} />;
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>BMI Calculator</Text>
      </View>

      {/* Gender Selection */}
      <View style={styles.genderContainer}>
        <TouchableOpacity style={[styles.maleBox, gender === "male" && styles.selectedBox]} onPress={() => setGender("male")}>
          <Image source={require("../../assets/bmi-calculator/ic-male.png")} style={styles.maleIcon} />
          <Text style={[styles.genderText, gender === "male" && styles.selectedText]}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.femaleBox, gender === "female" && styles.selectedBox]} onPress={() => setGender("female")}>
          <Image source={require("../../assets/bmi-calculator/ic-female.png")} style={styles.femaleIcon} />
          <Text style={[styles.genderText, gender === "female" && styles.selectedText]}>Female</Text>
        </TouchableOpacity>
      </View>

      {/* Height Slider */}
      <View style={styles.heightContainer}>
        <Text style={styles.label}>Height</Text>
        <Text style={styles.heightValue}>{height} cm</Text>
        <Slider
          value={height}
          onValueChange={(value) => setHeight(Math.round(value))}
          minimumValue={100}
          maximumValue={220}
          minimumTrackTintColor="#FF5C8D"
          maximumTrackTintColor="#FFF"
          thumbTintColor="#FF5C8D"
          style={styles.slider}
        />
      </View>

      {/* Weight and Age Controls */}
      <View style={styles.weightAgeContainer}>
        <View style={styles.weightBox}>
          <ControlBox label="Weight" value={weight} onIncrement={() => setWeight(weight + 1)} onDecrement={() => setWeight(weight - 1)} />
        </View>
        <View style={styles.ageBox}>
          <ControlBox label="Age" value={age} onIncrement={() => setAge(age + 1)} onDecrement={() => setAge(age - 1)} />
        </View>
      </View>

      {/* Calculate Button */}
      <TouchableOpacity style={styles.calculateButton} onPress={handleCalculateBMI}>
        <Text style={styles.calculateText}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
}

// ControlBox Component for Weight and Age
const ControlBox = ({ label, value, onIncrement, onDecrement }) => (
  <View style={styles.controlBox}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
    <View style={styles.controlButtons}>
      <TouchableOpacity style={styles.controlButton} onPress={onDecrement}>
        <Text style={styles.controlText}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.controlButton} onPress={onIncrement}>
        <Text style={styles.controlText}>+</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D1F33",
  },
  loadingText: {
    color: "white",
    fontSize: 24,
    fontFamily: "Poppins_500Medium",
  },
  container: {
    flex: 1,
    backgroundColor: "#1D1F33",
    padding: 20,
  },
  headerContainer: {
    backgroundColor: "#2C2F48",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 26,
  },
  header: {
    fontSize: 24,
    color: "white",
    fontFamily: "Poppins_600SemiBold",
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  maleBox: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    marginEnd: 5,
    borderRadius: 10,
    backgroundColor: "#2C2F48",
  },
  femaleBox: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    marginStart: 5,
    borderRadius: 10,
    backgroundColor: "#2C2F48",
  },
  selectedBox: {
    backgroundColor: "#3E4157",
  },
  maleIcon: {
    width: 86,
    height: 86,
    marginBottom: 16,
  },
  femaleIcon: {
    width: 61,
    height: 94,
    marginBottom: 10,
  },
  genderText: {
    color: "#A9A9A9",
    fontSize: 20,
    marginTop: 19,
    fontFamily: "Poppins_500Medium",
  },
  selectedText: {
    color: "white",
  },
  heightContainer: {
    backgroundColor: "#2C2F48",
    borderRadius: 10,
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 24,
    marginVertical: 10,
    alignItems: "center",
  },
  label: {
    color: "#A9A9A9",
    fontSize: 24,
    marginBottom: 10,
    fontFamily: "Poppins_500Medium",
  },
  heightValue: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 6,
    fontFamily: "Poppins_700Bold",
  },
  slider: {
    width: "100%",
    height: 40,
    marginTop: 10,
  },
  weightAgeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weightBox: {
    flex: 1,
    marginEnd: 5,
  },
  ageBox: {
    flex: 1,
    marginStart: 5,
  },
  controlBox: {
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#2C2F48",
  },
  value: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    marginVertical: 10,
    fontFamily: "Poppins_700Bold",
  },
  controlButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  controlButton: {
    backgroundColor: "#4C4F5E",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  controlText: {
    color: "white",
    fontSize: 24,
  },
  calculateButton: {
    backgroundColor: "#FF5C8D",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
  },
  calculateText: {
    color: "white",
    fontSize: 24,
    fontFamily: "Poppins_500Medium",
  },
});
