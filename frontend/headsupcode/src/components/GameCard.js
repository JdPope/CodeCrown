import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { ScreenOrientation } from 'expo'
import Timer from './Timer'

export default class GameCard extends Component {

    componentDidMount = () => {
        ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE_RIGHT)
        this.props.startTimer()
    }

    componentWillUnMount = () => {
        this.props.clearTimer()
        // ScreenOrientation.lockAsync(ScreenOrientation.Orientation.Default)
        //we want to unlock the orientation of the app in unmount and send props to final screen stop timer maybe on next screen
    }

    onPress = () => {
        this.props.nextCard()
    }

    render() {
        const { container, cardContainer, answerText, timer } = styles
        const { remainingTime, card, gyroscopeActive } = this.props

        return ( 
            <View style={cardContainer}>
                <Text style={answerText}>{card.question}</Text>
                <Timer timer={remainingTime} />
                {
                gyroscopeActive 
                    ? null
                    : <Button onPress={this.onPress} title='Next' />
                }
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
        marginLeft: 60,
        marginRight: 40,
    },

    answerText: {
        fontSize: 120,
        fontWeight: 'bold',
        color: white,
    },

})

