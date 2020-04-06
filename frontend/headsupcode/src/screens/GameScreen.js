import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import GameCard from '../components/GameCard'
import FinalScreen from '../components/FinalScreen'

export default class GameScreen extends Component {
    state = {
        remainingTime: 60,
        timer: null,
        cardIndex: 0,
        cards: [
            {id: 1, question: '--api', answer: 'Makes a Rails API', difficulty: 4, category_id: 2 },
            {id: 2, question: 'Closure', answer: 'It closes things', difficulty: 2, category_id: 2 },
            {id: 3, question: 'Ahmed', answer: 'He is a coder I guess', difficulty: 1, category_id: 2 },
            {id: 4, question: 'Rails', answer: 'Its Ruby', difficulty: 9, category_id: 2 },
        ],
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

    // randomizeCards = () => {

    // }

    currentCard = () => {
        const { cards, cardIndex } = this.state
        return cards[cardIndex]
    }

    nextCard = () => {
        const { cards, cardIndex } = this.state
        if(cardIndex < ( cards.length - 1 )){
            this.setState({cardIndex: cardIndex + 1})
        } else {
            this.setState({remainingTime: 0})
        }
    }

    render() {
        const { remainingTime, cards } = this.state
        const { startTimer, decrementTimer, clearTimer, currentCard, nextCard } = this
        return (
            <View style={styles.container}>
                {
                    remainingTime > -1
                        ? <GameCard 
                            style={styles.container}
                            remainingTime={remainingTime}
                            startTimer={startTimer}
                            decrementTimer={decrementTimer}
                            clearTimer={clearTimer}
                            card={currentCard()}
                            nextCard={nextCard}
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

