import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { ScreenOrientation } from 'expo'

export default class GameScreen extends Component {
    componentDidMount = () => {
        ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE_RIGHT)
    }

    componentWillUnMount = () => {
        ScreenOrientation.lockAsync(ScreenOrientation.Orientation.Default)
        //we want to unlock the orientation of the app in unmount and send props to final screen stop timer
    }

    render() {
        const { container, cardContainer, answerText, timer } = styles

        return ( 
            <View style={container}>
                    <View style={cardContainer}>
                        <Text style={answerText}>Closure</Text>
                        <Text style={timer}>0:82</Text>
                    </View>
            </View >
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
    container: {
        flex: 1,
        paddingLeft: 60,
        paddingRight: 40,
        backgroundColor: '#000',
    },

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

    timer: {
        fontSize: 50,
        color: white,
    }
})

