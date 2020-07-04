import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import Deck from '../components/Deck'

const HomeScreen = (props) => {
const startGame = (deck) => props.navigation.navigate('Game', {deck:deck})

const deckRender = props.navigation.state.params.decks.map(cardDeck => {
    return <Deck deck={cardDeck} key={cardDeck.id} startGame={startGame}/>
    })

    return (

        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Code Crown</Text>
            <ScrollView style={styles.scrollView}>
                {deckRender}
            </ScrollView>
        </SafeAreaView>
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

    container: {
        flex: 1,
        borderRadius: 50,
        borderWidth: 15,
        borderColor: '#FFF',
        backgroundColor: red,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 60,
        marginRight: 40,
    },

    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: white,
    },
    // deck:{
    //     display: flex,
    //     flexWrap: wrap,
    //     justifyContent: space-between      
    // }
})


export default HomeScreen
