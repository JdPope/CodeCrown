import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Deck from '../components/Deck'

const fakeData = ['one', 'two', 'three']

const deckRender  = fakeData.map( cardDeck => <Deck deck={cardDeck}/>)

const HomeScreen = (props) => {

    return (
console.log('props', props.navigation.state.params.decks),
    
    <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        {deckRender}
    </View>)
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        color:'blue'
    }
});

export default HomeScreen
