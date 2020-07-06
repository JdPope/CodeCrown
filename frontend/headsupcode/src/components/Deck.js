import React from 'react'
import {View, Text, StyleSheet, Button, Image} from 'react-native'
import { TouchableOpacity} from 'react-native-gesture-handler'

const Deck = ({startGame,deck}) => {
    return <View style={styles.container}>
        <Text style={styles.text}>{deck.title}</Text>
        <Image style={styles.image} source={{uri: deck.img}}/>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => startGame(deck)}
            style={styles.appButtonContainer}
        >
            <Text style={styles.appButtonText}>Start Game</Text>
        </TouchableOpacity>
    </View>
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
        borderRadius: 50,
        borderWidth: 15,
        borderColor: '#FFF',
        backgroundColor: red,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: white,
    },
    image: {
        width: 107,
        height: 165,
        padding: 10
      },
      appButtonContainer: {
        elevation: 8,
        backgroundColor: yellow,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
      appButtonText: {
        fontSize: 18,
        color: white,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }

})

export default Deck