import React, { useEffect } from 'react'
import {StatusBar, Text, SafeAreaView, ScrollView, View} from 'react-native'
import { ScreenOrientation } from 'expo'
import Deck from '../components/Deck'
import { styles } from '../styles/style';

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT_UP)
  }, [])  

  const startGame = (deck) => navigation.navigate('Game', {deck:deck})

  const deckRender = navigation.state.params.decks.map(cardDeck => {
    return <Deck deck={cardDeck} key={cardDeck.id} startGame={startGame}/>
  })

  return (
    <View style={styles.background}>
      <StatusBar hidden={true} />
      <SafeAreaView style={styles.cardContainer}>
        <Text style={styles.titleText}>Code Crown</Text>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.deckContainer} >
          {deckRender}
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
export default HomeScreen
