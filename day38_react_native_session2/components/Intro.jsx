import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/intro_logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
  },
  logo: {
    width: 295,
    height: 64,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default IntroScreen;
