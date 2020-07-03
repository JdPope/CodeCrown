import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const Deck = (props) => {
    return <View style={styles.container}>
        <Text style={styles.title}>Deck</Text>
        <Button onPress={()=>props.startGame()} title='Start Game'/>

    </View>
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

export default Deck