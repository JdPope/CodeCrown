import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../styles/style';

const {
  text, padding, deckImage, appButtonContainer, appButtonText,
} = styles;

const Deck = ({ startGame, deck }) => (

  <View style={styles.deck}>
    <Text style={[text, padding]}>{deck.title}</Text>
    <Image style={deckImage} source={{ uri: deck.img }} />
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => startGame(deck)}
      style={appButtonContainer}
    >
      <Text style={appButtonText}>Play</Text>
    </TouchableOpacity>
  </View>
);

export default Deck;
