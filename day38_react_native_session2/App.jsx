import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import IntroScreen from './screens/IntroScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import AboutMeScreen from './screens/AboutMeScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Intro');

  useEffect(() => {
    const introTimeout = setTimeout(() => {
      setCurrentScreen('Portfolio');
    }, 2000);

    const portfolioTimeout = setTimeout(() => {
      setCurrentScreen('Main');
    }, 5000);

    return () => {
      clearTimeout(introTimeout);
      clearTimeout(portfolioTimeout);
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {currentScreen === 'Intro' && <IntroScreen />}
      {currentScreen === 'Portfolio' && <PortfolioScreen />}
      {currentScreen === 'Main' && <AboutMeScreen />}
    </View>
  );
}
