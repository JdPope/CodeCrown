import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity} from 'react-native-gesture-handler'
import { ScreenOrientation } from 'expo'
import { DeviceMotion } from 'expo-sensors'
import { styles }  from '../styles/style';
import Timer from './Timer'
import Flip from './Flip'

export default class GameCard extends Component {
    state = {
        data: {},
        isRotated: false,
        isCorrect: null,
        isFlippable: false
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
            } else if (rotation.gamma < 2.2 && rotation.gamma > 1.7 && !isFlippable){
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
        const { gameCardContainer, titleText } = styles
        const { remainingTime, card } = this.props
        const { isRotated, isCorrect } = this.state

        return(
            <>
                {
                    isRotated 
                        ? <Flip isCorrect={isCorrect} unsetFlip={this.unsetFlip}/>
                        : <View style={gameCardContainer}>
                            <Text style={titleText}>{card.term}</Text>
                            <Timer time={remainingTime} />
                        </View>
                }
            </>
        )
    }

    nonDeviceMotionRender = () => {
        const { gameCardContainer, titleText } = styles
        const { remainingTime, card } = this.props
        return(
            <View style={gameCardContainer}>
                <Text style={titleText}>{card.term}</Text>
                <Timer time={remainingTime} />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={this.onPressCorrect}
                    style={styles.appButtonContainer}
                >
                    <Text style={styles.appButtonText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={this.onPressPass}
                    style={styles.appButtonContainer}
                >
                    <Text style={styles.appButtonText}>Pass</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return this.props.deviceMotionActive
            ? this.deviceMotionRender()
            : this.nonDeviceMotionRender()
    }
}

