import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { ScreenOrientation } from 'expo'
import { DeviceMotion } from 'expo-sensors'
import Timer from './Timer'
import Flip from './Flip'

export default class GameCard extends Component {

    state = {
        data: {},
        deviceMotionActive: false,
        isFlipped: false,
        isCorrect: null,
    }

    componentDidMount = () => {
        ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE_RIGHT)
        this.props.startTimer()
        this.checkForDeviceMotion()
    }

    componentWillUnMount = () => {
        this.props.clearTimer()
    }

    checkForDeviceMotion = async () => {
        const isDeviceMotionAvailable = await DeviceMotion.isAvailableAsync() 
        if(isDeviceMotionAvailable) {
            this.setState({deviceMotionActive: true})
            this.startDeviceMotionListener()
        } 
    }

    startDeviceMotionListener = () => {
        DeviceMotion.addListener(data => {
            this.setState({ data })
            DeviceMotion.setUpdateInterval(100)
            !this.state.isFlipped ? this.checkForRotation() : null
        })
    }

    checkForRotation = () => {
        const { rotation } = this.state.data

        if(rotation){
            if(rotation.gamma > 2.3){
                this.setState({
                    isFlipped: true,
                    isCorrect: true,
                })
            } else if (rotation.gamma < 1.3){
                this.setState({
                    isFlipped: true,
                    isCorrect: false,
                })
            } 
        }
    }

    unsetFlip = () => {
        console.log(this.state.isCorrect)
        this.props.handleUserResponse(this.state.isCorrect)
        this.setState({isFlipped: false, isCorrect: null})
        this.props.nextCard()
    }

    onPressCorrect = () => {
        this.props.handleUserResponse(true)
        this.props.nextCard()
    }

    deviceMotionRender = () => {
        const { container, cardContainer, answerText, timer } = styles
        const { remainingTime, card } = this.props
        const { isFlipped, isCorrect } = this.state

        return(
            <>
                {
                    isFlipped 
                        ? <Flip isCorrect={isCorrect} unsetFlip={this.unsetFlip}/>
                        : <View style={cardContainer}>
                            <Text style={answerText}>{card.question}</Text>
                            <Timer timer={remainingTime} />
                        </View>
                }
            </>
        )
    }

    nonDeviceMotionRender = () => {
        const { container, cardContainer, answerText, timer } = styles
        const { remainingTime, card } = this.props
        return(
            <View style={cardContainer}>
                <Text style={answerText}>{card.question}</Text>
                <Timer timer={remainingTime} />
                <Button onPress={this.onPressCorrect} title='Correct'/>
            </View>
        )
    }

    render() {
        return this.state.deviceMotionActive
            ? this.deviceMotionRender() 
            : this.nonDeviceMotionRender()
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

