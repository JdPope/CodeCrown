import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { DeviceMotion } from 'expo-sensors'
import Countdown from '../components/Countdown'
import GameCard from '../components/GameCard'
import FinalScreen from '../components/FinalScreen'

export default class GameScreen extends Component {
    state = {
        remainingTime: 63,
        timer: null,
        cardIndex: 0,
        cards: this.props.navigation.state.params.deck.cards,
        // cards: [
        //     { id: 1, question: '--api', answer: 'Makes a Rails API', difficulty: 4, category_id: 2 },
        //     { id: 2, question: 'Closure', answer: 'It closes things', difficulty: 2, category_id: 2 },
        //     { id: 3, question: 'Ahmed', answer: 'He is a coder I guess', difficulty: 1, category_id: 2 },
        //     { id: 4, question: 'Rails', answer: 'Its Ruby', difficulty: 9, category_id: 2 },
        // ],
        deviceMotionActive: true,
    }

    componentDidMount = () => {
        this.checkDeviceMotion()
        this.randomizeCards()
    }

    startTimer = () => {
        this.setState({ timer: setInterval( this.decrementTimer, 1000 ) })
    }

    decrementTimer = () => {
        this.setState({ remainingTime: this.state.remainingTime - 1 })
    }

    clearTimer = () => {
        clearInterval(this.state.timer)
        this.setState({ timer: null })
    }

    randomizeCards = () => {
        const randomCards = this.state.cards
            .map(card => ({ sort: Math.random(), ...card }))
            .sort((a, b) => a.sort - b.sort)
        this.setState({ cards: randomCards })
    }

    currentCard = () => {
        const { cards, cardIndex } = this.state
        return cards[cardIndex]
    }

    nextCard = () => {
        const { cards, cardIndex } = this.state
        if(cardIndex < ( cards.length - 1 )){
            this.setState({ cardIndex: cardIndex + 1 })
        } else {
            this.setState({ remainingTime: 0 })
        }
    }

    handleUserResponse = (isCorrect) => {
        const newCardsArray = this.state.cards
        newCardsArray[this.state.cardIndex]['isCorrect'] = isCorrect  

        this.setState({ cards: newCardsArray }) 
    }

    checkDeviceMotion = async () => {
        await DeviceMotion.isAvailableAsync() 
            ? this.setState({ deviceMotionActive: true }) 
            : this.setState({ deviceMotionActive: false })
    }

    renderComponent = () => {
        const { 
            remainingTime, 
            cards, 
            deviceMotionActive,
        } = this.state

        const { 
            startTimer, 
            decrementTimer, 
            clearTimer, 
            currentCard, 
            nextCard,
            handleUserResponse,
        } = this

        if (remainingTime > 60) {
            return (
                <Countdown 
                    startTimer={startTimer}
                    decrementTimer={decrementTimer}
                    remainingTime={remainingTime}
                />
            )

        } else if (remainingTime > 0) {
            return (
                <GameCard 
                    remainingTime={remainingTime}
                    decrementTimer={decrementTimer}
                    clearTimer={clearTimer}
                    card={currentCard()}
                    nextCard={nextCard}
                    deviceMotionActive={deviceMotionActive}
                    handleUserResponse={handleUserResponse}
                />
            ) 

        } else {
            return(
                <FinalScreen 
                    cards={cards}
                />
            )
        }
    } 

    render() {
        return (
            // console.log(this.props.navigation.state.params.deck),

            <View style={styles.container}>
                {this.renderComponent()}
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

