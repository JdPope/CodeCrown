import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import GameCard from '../components/GameCard'
import FinalScreen from '../components/FinalScreen'

export default class GameScreen extends Component {
    state = {
        remainingTime: 60,
        timer: null 
    }

    startTimer = () => {
        this.setState({ timer: setInterval( this.decrementTimer, 1000 ) })
    }

    decrementTimer = () => {
        this.setState({ remainingTime: this.state.remainingTime - 1 })
    }

    clearTimer = () => {
        clearInterval(this.state.timer)
    }
    render() {
        const { remainingTime } = this.state
        const { startTimer, decrementTimer, clearTimer } = this
        return (
            <View style={styles.container}>
                {
                    remainingTime > 0 
                        ? <GameCard 
                            style={styles.container}
                            remainingTime={remainingTime}
                            startTimer={startTimer}
                            decrementTimer={decrementTimer}
                            clearTimer={clearTimer}
                        />
                        : <FinalScreen />
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
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
})

