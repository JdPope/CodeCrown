import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/style';

const Deck = ({ startGame, deck }) => (
  <View style={styles.deck}>
    <Text style={[styles.text, styles.padding]}>{deck.title}</Text>
    <Image style={styles.deckImage} source={{ uri: deck.img }} />
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => startGame(deck)}
      style={styles.appButtonContainer}
    >
      <Text style={styles.appButtonText}>Play</Text>
    </TouchableOpacity>
  </View>
);

export default Deck;
