import React, { useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#988869" style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        {/* Profile Section */}
        <View style={styles.profile}>
          <Image source={require("../assets/home/profile.jpg")} style={styles.profileImage} />
          <View style={styles.nameContainer}>
            <Text style={[styles.name, styles.bold]}>Kelvin</Text>
            <Text style={[styles.name, styles.bold]}>Erlangga</Text>
            <Text style={[styles.name, styles.bold]}>Satriagung</Text>
          </View>
        </View>

        <View style={styles.bottomLineContainer}>
          <Image source={require("../assets/home/line-2.png")} style={styles.bottomLine} />
        </View>

        {/* Description */}
        <Text style={styles.description}>
          I am an active student in the 5th semester at the Universitas 17 Agustus 1945 Surabaya, majoring in Informatics Engineering. I have a great interest in information technology, especially in web development. I want to deepen my
          knowledge and skills in web application development. To that end, I always follow the latest developments in the world of technology and often get involved in small projects to apply what I have learned.
        </Text>

        {/* Logo Image */}
        <Image source={require("../assets/home/intro_logo.png")} style={styles.logoImage} />

        {/* Contact Info */}
        <View style={styles.contactSection}>
          <Text style={[styles.contactTitle, styles.semiBold]}>CONTACT ME</Text>
          <View style={styles.contactRow}>
            <Image source={require("../assets/home/mail.png")} style={styles.contactIcon} />
            <Text style={styles.contactDetail}>kelvinerlanggaa@gmail.com</Text>
          </View>
          <View style={styles.contactRow}>
            <Image source={require("../assets/home/phone.png")} style={styles.contactIcon} />
            <Text style={styles.contactDetail}>+62 822 4480 6395</Text>
          </View>
        </View>

        {/* Social Media Icons */}
        <View style={styles.socialIcons}>
          <Image source={require("../assets/home/ins.png")} style={styles.icon} />
          <Image source={require("../assets/home/facebook.png")} style={styles.icon} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1e",
    paddingHorizontal: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    paddingBottom: 50,
    marginTop: 50,
    paddingTop: 20,
  },
  profile: {
    flexDirection: "column",
    alignItems: "center",
  },
  profileImage: {
    width: 350,
    height: 486,
    borderRadius: 29,
    alignSelf: "center",
  },
  nameContainer: {
    width: "100%",
    paddingLeft: 15,
    marginTop: 34,
    marginBottom: 24,
  },
  name: {
    fontSize: 54,
    color: "#988869",
    lineHeight: 77,
    letterSpacing: 7.5,
    fontFamily: "Poppins_700Bold",
  },
  bottomLineContainer: {
    alignItems: "center",
    width: "100%",
  },
  bottomLine: {
    width: 351,
    height: 2,
  },
  description: {
    color: "#fff",
    fontSize: 16,
    textAlign: "justify",
    marginVertical: 34,
    paddingHorizontal: 15,
    letterSpacing: 1,
    fontFamily: "Poppins_400Regular",
  },
  logoImage: {
    width: 315,
    height: 70,
    marginBottom: 20,
    alignSelf: "center",
  },
  contactSection: {
    alignItems: "center",
    marginTop: 20,
  },
  contactTitle: {
    fontSize: 31,
    color: "#988869",
    marginBottom: 10,
    letterSpacing: 4.5,
    fontFamily: "Poppins_600SemiBold",
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  contactIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  contactDetail: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 70,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
});

export default Home;
