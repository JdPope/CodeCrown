import React, { useState, useEffect } from 'react';
import {
  View, StatusBar, ActivityIndicator,
} from 'react-native';
import styles from '../styles/style';

const LandingScreen = ({ navigation }) => {
  const URL = 'https://headsup-api.herokuapp.com/decks';
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigateToHome = () => {
    if (!loading) {
      navigation.navigate('Home', { decks });
    }
  };

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((responseDecks) => {
        setDecks(responseDecks);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
    navigateToHome();
  }, [loading]);

  const { background, cardContainer } = styles;

  return (
    <View style={background}>
      <StatusBar hidden />
      <View style={cardContainer}>
        <ActivityIndicator size="large" />
      </View>
    </View>
  );
};

export default LandingScreen;
