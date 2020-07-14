import React, { useEffect } from 'react';
import {
  StatusBar, Text, SafeAreaView, ScrollView, View,
} from 'react-native';
import { ScreenOrientation } from 'expo';
import Deck from '../components/Deck';
import { styles } from '../styles/style';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT_UP);
  }, []);

  const startGame = (deck) => navigation.navigate('Game', { deck });

  const deckRender = navigation.state.params.decks.map((cardDeck) => <Deck deck={cardDeck} key={cardDeck.id} startGame={startGame} />);

  const {
    background, cardContainer, titleText, scrollView, deckContainer,
  } = styles;

  return (
    <View style={background}>
      <StatusBar hidden />
      <SafeAreaView style={cardContainer}>
        <Text style={titleText}>Code Crown</Text>
        <ScrollView style={scrollView} contentContainerStyle={deckContainer}>
          {deckRender}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default HomeScreen;
