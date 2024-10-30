import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

const Navbar = ({ activeScreen, setActiveScreen }) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="small" color="#007AFF" />;
  }

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => setActiveScreen('Home')} style={styles.navItem}>
        <Icon name="home-outline" size={24} color={activeScreen === 'Home' ? '#007AFF' : '#333'} />
        <Text style={[styles.navText, activeScreen === 'Home' && styles.activeNavText, styles.poppinsMedium]}>
          Home
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => setActiveScreen('Calculator')} style={styles.navItem}>
        <Icon name="calculator-outline" size={24} color={activeScreen === 'Calculator' ? '#007AFF' : '#333'} />
        <Text style={[styles.navText, activeScreen === 'Calculator' && styles.activeNavText, styles.poppinsMedium]}>
          Calculator
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => setActiveScreen('BMI')} style={styles.navItem}>
        <Icon name="barbell-outline" size={24} color={activeScreen === 'BMI' ? '#007AFF' : '#333'} />
        <Text style={[styles.navText, activeScreen === 'BMI' && styles.activeNavText, styles.poppinsMedium]}>
          BMI Calculator
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => setActiveScreen('Weather')} style={styles.navItem}>
        <Icon name="cloud-outline" size={24} color={activeScreen === 'Weather' ? '#007AFF' : '#333'} />
        <Text style={[styles.navText, activeScreen === 'Weather' && styles.activeNavText, styles.poppinsMedium]}>
          Weather
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#333',
    fontFamily: 'Poppins_400Regular',
  },
  activeNavText: {
    color: '#007AFF',
    fontFamily: 'Poppins_700Bold',
  },
  poppinsMedium: {
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default Navbar;
