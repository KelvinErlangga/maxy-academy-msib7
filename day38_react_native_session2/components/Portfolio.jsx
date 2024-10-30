// Import React dan komponen dari React Native
import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView, ActivityIndicator, Linking, TouchableOpacity } from "react-native";
import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";

export default function PortfolioScreen() {
  // Load font
  let [fontsLoaded] = useFonts({
    Anton_400Regular,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  // Jika font belum ter-load, tampilkan loading
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#c9ab78" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PORTFOLIO</Text>
          <View style={styles.line} />

          {/* Section Go Up Leuwimalang */}
          <Text style={styles.projectTitle}>Go Up Leuwimalang</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
            <Image source={require("../assets/images/portfolio1/gul1.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio1/gul2.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio1/gul3.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio1/gul4.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio1/gul5.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio1/gul6.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio1/gul7.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio1/gul8.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio1/gul9.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio1/gul10.png")} style={styles.projectImage} />
          </ScrollView>

          {/* Link ke Website dan Source Code */}
          <View style={styles.linkContainer}>
            <TouchableOpacity onPress={() => Linking.openURL("https://go-up-leuwimalang.vercel.app/")}>
              <Text style={styles.linkText}>View Website</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("https://github.com/lluuvvii/go-up-leuwimalang")}>
              <Text style={styles.linkText}>View Source Code</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Section Vinstay */}
        <View style={styles.section}>
          <Text style={styles.projectTitle}>Vinstay</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
            <Image source={require("../assets/images/portfolio2/vinstay1.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio2/vinstay2.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio2/vinstay3.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio2/vinstay4.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio2/vinstay5.png")} style={styles.projectImage} />
          </ScrollView>

          {/* Link ke Website dan Source Code */}
          <View style={styles.linkContainer}>
            <TouchableOpacity onPress={() => Linking.openURL("https://example-vinstaywebsite.com")}>
              <Text style={styles.linkText}>View Website</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("https://github.com/KelvinErlangga/website-pemesanan-tempat-tinggal-online")}>
              <Text style={styles.linkText}>View Source Code</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Section Cinevibes */}
        <View style={styles.section}>
          <Text style={styles.projectTitle}>Cinevibes</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
            <Image source={require("../assets/images/portfolio3/cinevibes1.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio3/cinevibes2.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio3/cinevibes3.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio3/cinevibes4.png")} style={styles.projectImage} />
          </ScrollView>

          {/* Link ke Website dan Source Code */}
          <View style={styles.linkContainer}>
            <TouchableOpacity onPress={() => Linking.openURL("https://example-vinstaywebsite.com")}>
              <Text style={styles.linkText}>View Website</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("https://github.com/KelvinErlangga/maxy-academy-msib7/tree/master")}>
              <Text style={styles.linkText}>View Source Code</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Section SPT */}
        <View style={styles.section}>
          <Text style={styles.projectTitle}>PT. Sinergi Prima Teknologi</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
            <Image source={require("../assets/images/portfolio4/spt1.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio4/spt2.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio4/spt3.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio4/spt4.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio4/spt5.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio4/spt6.png")} style={styles.projectImage} />
            <Image source={require("../assets/images/portfolio4/spt7.png")} style={styles.projectImage} />
          </ScrollView>

          {/* Link ke Website dan Source Code */}
          <View style={styles.linkContainer}>
            <TouchableOpacity onPress={() => Linking.openURL("https://example-vinstaywebsite.com")}>
              <Text style={styles.linkText}>View Website</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL("https://github.com/KelvinErlangga/maxy-academy-msib7/tree/main/day18_tailwindcss")}>
              <Text style={styles.linkText}>View Source Code</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  sectionTitle: {
    color: "#988869",
    fontSize: 36,
    textAlign: "center",
    fontFamily: "Anton_400Regular",
    marginBottom: 10,
  },
  projectTitle: {
    color: "#988869",
    fontSize: 28,
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
    marginBottom: 10,
  },
  line: {
    borderBottomColor: "#988869",
    borderBottomWidth: 1,
    width: "90%",
    alignSelf: "center",
    marginBottom: 20,
  },
  imageScroll: {
    flexDirection: "row",
    paddingLeft: 10,
  },
  projectImage: {
    width: 460,
    height: 230,
    resizeMode: "cover",
    marginRight: 15,
    borderRadius: 10,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  linkText: {
    color: "#c9ab78",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    textDecorationLine: "underline",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1c1e",
  },
});
