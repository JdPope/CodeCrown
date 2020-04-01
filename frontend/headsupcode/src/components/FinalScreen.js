import React, { Component } from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import { ScreenOrientation } from 'expo'

export default class FinalScreen extends Component {

    componentDidMount = () => {
        ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT)
    }

    render() {
        const { container, cardContainer, answerText, timer } = styles
        const { remainingTime } = this.props

        return ( 
            <View style={cardContainer}>
                <Text style={answerText}>Final Screen</Text>
            </View>
        )
    }
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

    cardContainer: {
        flex: 1,
        borderRadius: 50,
        borderWidth: 15,
        borderColor: '#FFF',
        backgroundColor: red,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },

    answerText: {
        fontSize: 120,
        fontWeight: 'bold',
        color: white,
    },

})

