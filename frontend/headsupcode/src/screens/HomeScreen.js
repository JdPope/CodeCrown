import React from 'react'
import {Text, StyleSheet, SafeAreaView, ScrollView, View} from 'react-native'
import Deck from '../components/Deck'



const HomeScreen = ({navigation}) => { 
    const startGame = (deck) => navigation.navigate('Game', {deck:deck})

    const deckRender = navigation.state.params.decks.map(cardDeck => {
        return <Deck deck={cardDeck} key={cardDeck.id} startGame={startGame}/>
    })

    return (
      <View style={styles.background}>
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Code Crown</Text>
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.deckContainer}>
                 {deckRender}
                </View>
            </ScrollView>
        </SafeAreaView>
      </View>
    )
}
const color = {
    green: 'hsla(161, 92%, 15%, 1)',
    lightGreen: 'hsla(63, 28%, 72%, 1)',
    yellow: 'hsla(49, 90%, 56%, 1)',
    orange: 'hsla(16, 88%, 57%, 1)',
    red: 'hsla(5, 62%, 41%, 1)',
    white: '#FFF'
}

const { green, lightGreen, yellow, orange, red, white  } = color

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black'
  },
  contentContainerStyle:{
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,     
  },

    container: {
        flex: 1,
        borderRadius: 50,
        borderWidth: 15,
        borderColor: '#FFF',
        backgroundColor: red,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center', 
        width:'100%'
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: white,
    },
    deckContainer:{
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    }
    // deck:{
    //     width:'20px'
    // }
})


export default HomeScreen
