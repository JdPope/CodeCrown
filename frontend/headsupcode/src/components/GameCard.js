import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { ScreenOrientation } from 'expo'
import { DeviceMotion } from 'expo-sensors'
import Timer from './Timer'
import Flip from './Flip'

export default class GameCard extends Component {
    state = {
        data: {},
        isRotated: false,
        isCorrect: null,
        isFlippable: true
    }

    componentDidMount = () => {
        ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE_RIGHT)
        this.startDeviceMotionListener()
    }

    componentWillUnmount = () => {
        this.props.clearTimer()
        this.props.deviceMotionActive
            ? DeviceMotion.removeAllListeners()
            : null
    }

    startDeviceMotionListener = () => {
        if (this.props.deviceMotionActive) {
            DeviceMotion.addListener(data => {
                this.setState({ data })
                DeviceMotion.setUpdateInterval(100)
                !this.state.isRotated ? this.checkForRotation() : null
            })
        }
    }

    checkForRotation = () => {
        const { rotation } = this.state.data
        const { isFlippable } = this.state

        if(rotation){
            if(rotation.gamma > 2.5 && rotation.gamma < 2.8 && isFlippable){
                this.setState({
                    isRotated: true,
                    isCorrect: true,
                    isFlippable: false,
                })
            } else if (rotation.gamma < 1.3 && rotation.gamma > 1.0 && isFlippable){
                this.setState({
                    isRotated: true,
                    isCorrect: false,
                    isFlippable: false,
                })
            } else if (rotation.gamma < 2.2 && rotation.gamma > 1.6 && !isFlippable){
                this.setState({ isFlippable: true })
            }
        }
    }

    unsetFlip = () => {
        this.props.handleUserResponse(this.state.isCorrect)
        this.setState({ isRotated: false, isCorrect: null })
        this.props.nextCard()
    }

    onPressCorrect = () => {
        this.props.handleUserResponse(true)
        this.props.nextCard()
    }

    onPressPass = () => {
        this.props.handleUserResponse(false)
        this.setState({ isRotated: false, isCorrect: null })
        this.props.nextCard()
    }

    deviceMotionRender = () => {
        const { container, cardContainer, answerText, timer } = styles
        const { remainingTime, card } = this.props
        const { isRotated, isCorrect } = this.state

        return(
            <>
                {
                    isRotated 
                        ? <Flip isCorrect={isCorrect} unsetFlip={this.unsetFlip}/>
                        : <View style={cardContainer}>
                            <Text style={answerText}>{card.question}</Text>
                            <Timer time={remainingTime} />
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
                <Timer time={remainingTime} />
                <Button onPress={this.onPressCorrect} title='Correct'/>
                <Button onPress={this.onPressPass} title='Pass'/>
            </View>
        )
    }

    render() {
        return this.props.deviceMotionActive
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

