import React, { Component } from 'react';
import { View } from 'react-native';
import { DeviceMotion } from 'expo-sensors';
import { styles } from '../styles/style';
import Countdown from '../components/Countdown';
import GameCard from '../components/GameCard';
import FinalScreen from '../components/FinalScreen';

export default class GameScreen extends Component {

    state = {
      remainingTime: 63,
      timer: null,
      cardIndex: 0,
      cards: this.props.navigation.state.params.deck.cards,
      deviceMotionActive: true,
    }

    returnHome = (event) => this.props.navigation.navigate('Home')

    componentDidMount = () => {
      this.checkDeviceMotion();
      this.randomizeCards();
    }

    startTimer = () => {
      this.setState({ timer: setInterval(this.decrementTimer, 1000) });
    }

    decrementTimer = () => {
      this.setState({ remainingTime: this.state.remainingTime - 1 });
    }

    clearTimer = () => {
      clearInterval(this.state.timer);
      this.setState({ timer: null });
    }

    randomizeCards = () => {
      const randomCards = this.state.cards
        .map((card) => ({ sort: Math.random(), ...card }))
        .sort((a, b) => a.sort - b.sort);
      this.setState({ cards: randomCards });
    }

    currentCard = () => {
      const { cards, cardIndex } = this.state;
      return cards[cardIndex];
    }

    nextCard = () => {
      const { cards, cardIndex } = this.state;
      if (cardIndex < (cards.length - 1)) {
        this.setState({ cardIndex: cardIndex + 1 });
      } else {
        this.setState({ remainingTime: 0 });
      }
    }

    handleUserResponse = (isCorrect) => {
      const newCardsArray = this.state.cards;
      newCardsArray[this.state.cardIndex].isCorrect = isCorrect;

      this.setState({ cards: newCardsArray });
    }

    checkDeviceMotion = async () => {
      await DeviceMotion.isAvailableAsync()
        ? this.setState({ deviceMotionActive: true })
        : this.setState({ deviceMotionActive: false });
    }

    renderComponent = () => {
      const {
        remainingTime,
        cards,
        deviceMotionActive,
      } = this.state;

      const {
        startTimer,
        decrementTimer,
        clearTimer,
        currentCard,
        nextCard,
        handleUserResponse,
      } = this;

      if (remainingTime > 60) {
        return (
          <Countdown
            startTimer={startTimer}
            decrementTimer={decrementTimer}
            remainingTime={remainingTime}
          />
        );
      } if (remainingTime > 0) {
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
        );
      }
      return (
        <FinalScreen
          returnHome={this.returnHome}
          cards={cards}
        />
      );
    }

    render() {
      return (
        <View style={styles.background}>
          {this.renderComponent()}
        </View>
      );

    }
  } 

  render() {
    const { background } = styles
    return (
      <View style={background}>
        {this.renderComponent()}
      </View>
    )
  }
}
