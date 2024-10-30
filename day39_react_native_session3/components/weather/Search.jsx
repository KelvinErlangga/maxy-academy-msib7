import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

const ManageLocationScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [locations, setLocations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const API_KEY = 'e872d065393af19b4b7448122588fced';

  const recommendedLocations = [
    { id: '1', city: 'Malang', tempMin: 20, tempMax: 24, weather: 'Heavy rain' },
    { id: '2', city: 'Banyuwangi', tempMin: 22, tempMax: 26, weather: 'Heavy rain' },
    { id: '3', city: 'Jakarta', tempMin: 27, tempMax: 28, weather: 'Cloudy' },
  ];

  useEffect(() => {
    setLocations(recommendedLocations);
  }, []);

  const handleSearch = () => {
    if (searchText.trim() === '') {
      setLocations(recommendedLocations);
      setSearchResults([]);
      return;
    }

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        const { name, main, weather } = response.data;
        setSearchResults([
          {
            id: 'search-result',
            city: name,
            tempMin: Math.round(main.temp_min),
            tempMax: Math.round(main.temp_max),
            weather: weather[0].main,
          },
        ]);
        setLocations([]);
      })
      .catch((error) => {
        console.error(error);
        setLocations(recommendedLocations);
        setSearchResults([]);
      });
  };

  const renderLocation = ({ item }) => (
    <View style={styles.locationCard}>
      <View style={styles.locationInfo}>
        <Text style={styles.cityName}>
          {item.city} <Icon name="location-on" size={16} color="#000" />
        </Text>
        <Text style={styles.temperatures}>{`${item.tempMin}°/${item.tempMax}°`}</Text>
      </View>
      <View style={styles.weatherInfo}>
        <Text style={styles.weather}>{item.weather}</Text>
        <Icon name="cloud" size={24} color="#000" />
      </View>
    </View>
  );

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Manage Location</Text>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#666" />
        <TextInput
          placeholder="Search Your City"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
          style={styles.searchInput}
        />
      </View>

      {/* List of locations */}
      <FlatList
        data={searchResults.length > 0 ? searchResults : locations}
        keyExtractor={(item) => item.id}
        renderItem={renderLocation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a9df4',
    padding: 16,
    paddingTop: 46,
  },
  backButton: {
    position: 'absolute',
    top: 53,
    left: 16,
    zIndex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginVertical: 8,
    marginBottom: 27,
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginVertical: 10,
    height: 40,
  },
  searchInput: {
    flex: 1,
    padding: 8,
    fontFamily: 'Poppins_400Regular',
  },
  locationCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
  },
  locationInfo: {
    flexDirection: 'column',
  },
  cityName: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold',
  },
  temperatures: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Poppins_400Regular',
  },
  weatherInfo: {
    alignItems: 'center',
  },
  weather: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Poppins_400Regular',
  },
});

export default ManageLocationScreen;
