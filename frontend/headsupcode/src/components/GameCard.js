import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { ScreenOrientation } from 'expo'
import { DeviceMotion } from 'expo-sensors'
import Timer from './Timer'
import Flip from './Flip'

export default class GameCard extends Component {

    state = {
        data: {},

    }

    componentDidMount = () => {
        ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE_RIGHT)
        this.props.startTimer()
    }

    componentWillUnMount = () => {
        this.props.clearTimer()
        // ScreenOrientation.lockAsync(ScreenOrientation.Orientation.Default)
        //we want to unlock the orientation of the app in unmount and send props to final screen stop timer maybe on next screen
    }

    startDeviceMotionListener = () => {
        DeviceMotion.addListener(data => {
            this.setState({ data })
        })
        DeviceMotion.setUpdateInterval(5000)
        return null
    }

    onPress = () => {
        this.props.nextCard()
    }

    checkForRotation = () => {
        const { rotation } = this.state.data
        if(rotation){
            return rotation.gamma < 2.3 && rotation.gamma > 0.9
        }
    }

    nonDeviceMotionRender = () => {
        const { container, cardContainer, answerText, timer } = styles
        const { remainingTime, card } = this.props
        return(
            <View style={cardContainer}>
                <Text style={answerText}>{card.question}</Text>
                <Timer timer={remainingTime} />
                <Button onPress={this.onPress} title='Next'/>
            </View>
        )
    }

    deviceMotionRender = () => {
        const { container, cardContainer, answerText, timer } = styles
        const { remainingTime, card } = this.props
        return(
            <View style={cardContainer}>
                <Text style={answerText}>{card.question}</Text>
                <Timer timer={remainingTime} />
            </View>
        )
    }

    checkDeviceMotion = () => {
        return this.props.deviceMotionActive 
            ? this.deviceMotionRender()
            : this.nonDeviceMotionRender()
    }



    render() {
       return this.checkDeviceMotion()
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

