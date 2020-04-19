import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { DeviceMotion } from 'expo-sensors'

export default class Flip extends Component {

    componentDidMount() {
        setTimeout(() => this.props.unsetFlip(), 1000)
    }

    render(){
        const { cardContainer, answerText, green, orange } = styles
        const { isCorrect } = this.props

        return ( 
            <View style={cardContainer} style={isCorrect ? green : orange}>
                <Text style={answerText}>{isCorrect ? 'Correct' : 'Pass'}</Text>
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

    green: {
        backgroundColor: green,
        flex: 1,
        borderRadius: 50,
        borderWidth: 15,
        borderColor: '#FFF',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 60,
        marginRight: 40,
    },

    orange: {
        backgroundColor: orange,
        flex: 1,
        borderRadius: 50,
        borderWidth: 15,
        borderColor: '#FFF',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 60,
        marginRight: 40,
    },

    cardContainer: {
        flex: 1,
        borderRadius: 50,
        borderWidth: 15,
        borderColor: '#FFF',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 60,
        marginRight: 40,
    },

    answerText: {
        fontSize: 120,
        fontWeight: 'bold',
        color: white,
    },

})

