import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView, ImageBackground } from "react-native";

export default function ExperienceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={styles.experience}>EXPERIENCE</Text>

          {/* First Experience Block */}
          <View style={styles.experienceBlock}>
            <Text style={styles.company}>Universitas 17 Agustus 1945 Surabaya</Text>
            <Text style={styles.position}>• Laboratory Assistant - (09/2023 - Now)</Text>
            <Text style={styles.position}>• Robotic Team - (03/2023 - 07/2023)</Text>
            <View style={styles.line} />
          </View>

          {/* Second Experience Block */}
          <View style={styles.experienceBlock}>
            <Text style={styles.company}>Maxy Academy</Text>
            <Text style={styles.position}>• Frontend Student MSIB batch 7 - (09/2024 - Now)</Text>
            <View style={styles.line} />
          </View>
        </View>

        {/* Software Skills Section */}
        <ImageBackground source={require("../assets/images/software-bg.png")} style={styles.softwareBackground}>
          <View style={styles.section}>
            <Text style={styles.skills}>SOFTWARE</Text>
            <Text style={styles.skillLabel}>| Master Skill |</Text>
            <View style={styles.skillRow}>
              <Image source={require("../assets/icons/ps.png")} style={styles.skillIcon} />
              <Image source={require("../assets/icons/ai.png")} style={styles.skillIcon} />
              <Image source={require("../assets/icons/id.png")} style={styles.skillIcon} />
              <Image source={require("../assets/icons/lr.png")} style={styles.skillIcon} />
            </View>

            <Text style={styles.skillLabel}>| Basic Skill |</Text>
            <View style={styles.skillRow}>
              <Image source={require("../assets/icons/pr.png")} style={styles.skillIcon} />
              <Image source={require("../assets/icons/ae.png")} style={styles.skillIcon} />
              <Image source={require("../assets/icons/figma.png")} style={styles.skillIcon} />
              <Image source={require("../assets/icons/blender.png")} style={styles.skillIcon} />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1e",
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 40,
  },
  experience: {
    color: "#988869",
    fontSize: 36,
    textAlign: "center",
    fontFamily: "Anton_400Regular",
    marginBottom: 20,
  },
  skills: {
    color: "#252525",
    fontSize: 36,
    textAlign: "center",
    fontFamily: "Anton_400Regular",
    marginBottom: 20,
  },
  experienceBlock: {
    marginBottom: 20,
  },
  company: {
    color: "#988869",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
    marginBottom: 10,
  },
  position: {
    color: "#fff",
    fontSize: 16,
    textAlign: "left",
    marginLeft: 10,
    fontFamily: "Poppins_400Regular",
    marginBottom: 5,
  },
  line: {
    borderBottomColor: "#988869",
    borderBottomWidth: 1,
    width: "100%",
    marginTop: 10,
  },
  skillLabel: {
    color: "#252525",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
    marginBottom: 20,
  },
  skillRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  skillIcon: {
    width: 60,
    height: 60,
  },
  softwareBackground: {
    paddingVertical: 40,
    marginBottom: 40,
    borderRadius: 49,
    overflow: 'hidden', 
  },
});
