import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView, ImageBackground } from "react-native";

export default function ExperienceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.experience}>EXPERIENCE</Text>

          {/* Pengalaman pertama */}
          <View style={styles.experienceBlock}>
            <Text style={styles.company}>Universitas 17 Agustus 1945 Surabaya</Text>
            <Text style={styles.position}>• Laboratory Assistant - (09/2023 - Now)</Text>
            <Text style={styles.position}>• Robotic Team - (03/2023 - 07/2023)</Text>
            <View style={styles.line} />
          </View>

          {/* Pengalaman kedua */}
          <View style={styles.experienceBlock}>
            <Text style={styles.company}>Maxy Academy</Text>
            <Text style={styles.position}>• Frontend Student MSIB batch 7 - (09/2024 - Now)</Text>
            <View style={styles.line} />
          </View>
        </View>

        {/* Skills Section */}
        <ImageBackground source={require("../assets/images/software-bg.png")} style={styles.softwareBackground}>
          {/* Programming Language */}
          <View style={styles.section}>
            <Text style={styles.skills}>Programming Language</Text>
            <Text style={styles.skillLabel}>| Master Skill |</Text>
            <View style={styles.skillRow}>
              {/* Icon master skill */}
              <Image source={{ uri: "https://img.icons8.com/?size=100&id=39853&format=png&color=000000" }} style={styles.skillIcon} />
              <Image source={{ uri: "https://img.icons8.com/?size=100&id=3753&format=png&color=000000" }} style={styles.skillIcon} />
            </View>
            <Text style={styles.skillLabel}>| Basic Skill |</Text>
            <View style={styles.skillRow}>
              {/* Icon basic skill */}
              <Image source={{ uri: "https://img.icons8.com/?size=100&id=2572&format=png&color=000000" }} style={styles.skillIcon} />
              <Image source={{ uri: "https://img.icons8.com/?size=100&id=12584&format=png&color=000000" }} style={styles.skillIcon} />
              <Image source={{ uri: "https://img.icons8.com/?size=100&id=I7aUeNbXczzf&format=png&color=000000" }} style={styles.skillIcon} />
              <Image source={{ uri: "https://img.icons8.com/?size=100&id=44328&format=png&color=000000" }} style={styles.skillIcon} />
            </View>
          </View>

          {/* Framework Section */}
          <View style={styles.section}>
            <Text style={styles.skills}>Framework</Text>
            <Text style={styles.skillLabel}>| Master Skill |</Text>
            <View style={styles.skillRow}>
              {/* Icon master skill */}
              <Image source={{ uri: "https://img.icons8.com/?size=100&id=N3G7bBnphi53&format=png&color=000000" }} style={styles.skillIcon} />
              <Image source={{ uri: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000" }} style={styles.skillIcon} />
              <Image source={{ uri: "https://img.icons8.com/?size=100&id=114956&format=png&color=000000" }} style={styles.skillIcon} />
            </View>
            <Text style={styles.skillLabel}>| Basic Skill |</Text>
            <View style={styles.skillRow}>
              {/* Icon basic skill */}
              <Image source={{ uri: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000" }} style={styles.skillIcon} />
              <Image source={{ uri: "https://img.icons8.com/?size=100&id=TwdB62yFXesu&format=png&color=000000" }} style={styles.skillIcon} />
              <Image
                source={{ uri: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/framework7-zfns3e58izqvukjinybgx8.png/framework7-9l41c02svej2syjqbnu8g.png?_a=DAJFJtWIZAAC" }}
                style={styles.skillIcon}
              />
            </View>
          </View>

          {/* Database Section */}
          <View style={styles.section}>
            <Text style={styles.skills}>Database</Text>
            <Text style={styles.skillLabel}>| Master Skill |</Text>
            <View style={styles.skillRow}>
              {/* Icon master skill */}
              <Image source={{ uri: "https://img.icons8.com/?size=100&id=11572&format=png&color=000000" }} style={styles.skillIcon} />
            </View>
            <Text style={styles.skillLabel}>| Basic Skill |</Text>
            <View style={styles.skillRow}>
              {/* Icon basic skill */}
              <Image source={{ uri: "https://img.icons8.com/?size=100&id=WC9GOvjtKVuH&format=png&color=000000" }} style={styles.skillIcon} />
            </View>
          </View>

          {/* Others Section */}
          <View style={styles.section}>
            <Text style={styles.skills}>Other</Text>
            <Text style={styles.skillLabel}>| Master Skill |</Text>
            <View style={styles.skillRow}>
              {/* Icon master skill */}
              <Image source={{ uri: "https://img.icons8.com/?size=100&id=1043&format=png&color=000000" }} style={styles.skillIcon} />
              <Image source={{ uri: "https://img.icons8.com/?size=100&id=1045&format=png&color=000000" }} style={styles.skillIcon} />
              <Image source={{ uri: "https://img.icons8.com/?size=100&id=21888&format=png&color=000000" }} style={styles.skillIcon} />
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
    overflow: "hidden",
  },
});
