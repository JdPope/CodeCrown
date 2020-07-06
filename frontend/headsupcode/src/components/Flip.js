import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { DeviceMotion } from 'expo-sensors'
import { styles } from '../styles/style';

export default class Flip extends Component {

    componentDidMount() {
        setTimeout(() => this.props.unsetFlip(), 1000)
    }

    render(){
        const { gameCardContainer, flipText, green, orange } = styles
        const { isCorrect } = this.props

        return ( 
            <View style={gameCardContainer} style={isCorrect ? green : orange}>
                <Text style={flipText}>{isCorrect ? 'Correct' : 'Pass'}</Text>
            </View>
        )
    }
}