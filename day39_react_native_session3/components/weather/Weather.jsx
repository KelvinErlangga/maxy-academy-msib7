import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from "@expo-google-fonts/poppins";

const Weather = ({ onNavigate }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const API_KEY = "e872d065393af19b4b7448122588fced";
  const city = "Surabaya";
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        setWeatherData(weatherResponse.data);

        const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
        setForecastData(forecastResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeather();
  }, []);

  if (!fontsLoaded || !weatherData || !forecastData) {
    return <ActivityIndicator size="large" color="#007AFF" style={styles.loadingIndicator} />;
  }

  const { main, weather, wind } = weatherData;
  const temperature = Math.round(main.temp);
  const humidity = main.humidity;
  const pressure = main.pressure;
  const windSpeed = wind.speed;
  const weatherDescription = weather[0].description;
  const date = new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });

  return (
    <LinearGradient colors={["#60AFFF", "#007AFF"]} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => onNavigate("Search")}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
        <Text style={styles.city}>{city}</Text>
      </View>

      <Image source={require("../../assets/weather/ic-cloud.png")} style={styles.icon} />
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.temperature}>{temperature}°</Text>
      <Text style={styles.description}>{weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)}</Text>

      <View style={styles.details}>
        <DetailItem label="Wind" value={`${windSpeed} km/h`} />
        <DetailItem label="Chance of rain" value="74%" />
        <DetailItem label="Pressure" value={`${pressure} mbar`} />
        <DetailItem label="Humidity" value={`${humidity}%`} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.forecastContainer}>
        {forecastData.list.slice(0, 5).map((item, index) => (
          <ForecastItem key={index} data={item} />
        ))}
      </ScrollView>

      <Text style={styles.footer}>Forecast for 7 Days</Text>
    </LinearGradient>
  );
};

const DetailItem = ({ label, value }) => (
  <View style={styles.detailItem}>
    <Text style={styles.detailText}>{value}</Text>
    <Text style={styles.detailLabel}>{label}</Text>
  </View>
);

const ForecastItem = ({ data }) => (
  <View style={styles.forecastItem}>
    <Text style={styles.forecastTime}>{new Date(data.dt * 1000).getHours()}:00</Text>
    <Text style={styles.forecastTemp}>
      {Math.round(data.main.temp)}°/{Math.round(data.main.feels_like)}°
    </Text>
    <Text style={styles.forecastRain}>{Math.round(data.pop * 100)}% rain</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    borderRadius: 20,
    marginHorizontal: 16,
    marginTop: 50,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  plus: {
    fontSize: 28,
    color: "#fff",
    fontFamily: "Poppins_700Bold",
  },
  city: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
  },
  icon: {
    width: 240,
    height: 240,
    alignSelf: "center",
    marginVertical: 20,
  },
  date: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
  },
  temperature: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },
  description: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginVertical: 10,
    fontFamily: "Poppins_400Regular",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.3)",
    paddingTop: 20,
  },
  detailItem: {
    alignItems: "center",
  },
  detailText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
    fontFamily: "Poppins_500Medium",
  },
  detailLabel: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.8,
    fontFamily: "Poppins_400Regular",
  },
  forecastContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  forecastItem: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  forecastTime: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  forecastTemp: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  forecastRain: {
    color: "#fff",
    fontSize: 12,
    opacity: 0.7,
    fontFamily: "Poppins_400Regular",
  },
  footer: {
    textAlign: "center",
    color: "#fff",
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Poppins_600SemiBold",
  },
});

export default Weather;
