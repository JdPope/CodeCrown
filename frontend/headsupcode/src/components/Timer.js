import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Timer = ({ timer }) => {
    const { timerStyle } = styles

    const calcuateTime = () => {
        const minutes = Math.trunc(timer/60)
        const secondsCalculation = `${timer - (60 * minutes)}`
        const seconds = secondsCalculation.length === 1 ? `0${secondsCalculation}` : secondsCalculation
        return `${minutes}:${seconds}`
    }

    return <Text style={timerStyle}>{calcuateTime()}</Text>
}

const styles = StyleSheet.create({
    timerStyle: {
        fontSize: 50,
        color: '#FFF',
    }
})

export default Timer
