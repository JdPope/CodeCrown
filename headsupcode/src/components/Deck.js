import React from 'react'
import {View, Text, StyleSheet, Button, Image} from 'react-native'
import { styles }  from '../styles/style';

const Deck = ({startGame, deck}) => {
  return <View style={styles.deck}>
      <Text style={[styles.text, styles.padding]}>{deck.title}</Text>
      <Image style={styles.image} source={deck.img}/>
    <Button style={styles.button} onPress={() => startGame(deck)} title='Start Game'/>
  </View>
}

export default Deck
