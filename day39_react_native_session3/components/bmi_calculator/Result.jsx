import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ResultScreen = ({ bmi, status, onRecalculate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>BMI Calculator</Text>
      </View>

      <Text style={styles.resultTitle}>Your Result</Text>

      <View style={styles.resultContainer}>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.bmiValue}>{bmi}</Text>
        <Text style={styles.description}>
          {status === "Underweight"
            ? "You have a lower than normal body weight. Try to eat more."
            : status === "Normal"
            ? "You have a normal body weight. Good job!"
            : status === "Overweight"
            ? "You have a higher than normal body weight. Try to exercise more."
            : "You have a much higher than normal body weight. Consider seeking advice from a healthcare provider."}
        </Text>
      </View>

      <TouchableOpacity style={styles.recalculateButton} onPress={onRecalculate}>
        <Text style={styles.recalculateText}>Re - Calculate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1F33",
    padding: 20,
    alignItems: "center",
  },
  headerContainer: {
    backgroundColor: "#2C2F48",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignSelf: "center",
    width: "100%",
    marginBottom: 20,
    marginTop: 26,
  },
  header: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
  },
  resultTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    fontFamily: "Poppins_700Bold",
  },
  resultContainer: {
    backgroundColor: "#2C2F48",
    borderRadius: 10,
    width: "100%",
    padding: 20,
    alignItems: "center",
  },
  status: {
    fontSize: 20,
    color: "green",
    marginBottom: 10,
    fontFamily: "Poppins_500Medium",
  },
  bmiValue: {
    fontSize: 64,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Poppins_700Bold",
  },
  description: {
    fontSize: 16,
    color: "#A9A9A9",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Poppins_400Regular",
  },
  recalculateButton: {
    backgroundColor: "#EB1555",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  recalculateText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Poppins_500Medium",
  },
});

export default ResultScreen;
