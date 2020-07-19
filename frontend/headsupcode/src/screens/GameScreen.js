import React, { useState } from 'react';
import { View } from 'react-native';
import { DeviceMotion } from 'expo-sensors';
import { styles } from '../styles/style';
import Countdown from '../components/Countdown';
import GameCard from '../components/GameCard';
import FinalScreen from '../components/FinalScreen';

const GameScreen = (props) => {

  const [remainingTime, setRemainingTime] = useState(63)
  const [timer, setTimer] = useState(null)
  const [cardIndex, setCardIndex] = useState(0)


  state = {
    cards: this.props.navigation.state.params.deck.cards,
    deviceMotionActive: true,
  }

  componentDidMount = () => {
    this.checkDeviceMotion();
    this.randomizeCards();
  }

  checkDeviceMotion = async () => {
    await DeviceMotion.isAvailableAsync()
      ? this.setState({ deviceMotionActive: true })
      : this.setState({ deviceMotionActive: false });
  }

  randomizeCards = () => {
    const randomCards = this.state.cards
      .map((card) => ({ sort: Math.random(), ...card }))
      .sort((a, b) => a.sort - b.sort);

    this.setState({ cards: randomCards });
  }

  startTimer = () => {
    setTimer(setInterval(decrementTimer, 1000));
  }

  decrementTimer = () => {
    setRemainingTime(remainingTime - 1)
  }

  clearTimer = () => {
    clearInterval({timer});
    setTimer(null);
  }

  currentCard = () => {
    const { cards} = this.state;
    return cards[{cardIndex}];
  }

  nextCard = () => {
    const { cards } = this.state;
    if ({cardIndex }< (cards.length - 1)) {
      setCardIndex( {cardIndex} + 1 );
    } else {
      setRemainingTime(0)

    }
  }

  handleUserResponse = (isCorrect) => {
    const newCardsArray = this.state.cards;
    newCardsArray[{cardIndex}].isCorrect = isCorrect;

    this.setState({ cards: newCardsArray });
  }

  returnHome = (event) => this.props.navigation.navigate('Home')

  renderComponent = () => {
    const {cards, deviceMotionActive } = this.state;
    const {
      startTimer, decrementTimer, clearTimer, currentCard, nextCard, handleUserResponse, returnHome,
    } = this;

    if ({remainingTime} > 60) {
      return (
        <Countdown
          startTimer={startTimer}
          decrementTimer={decrementTimer}
          remainingTime={remainingTime}
        />
      );
    } if ({remainingTime} > 0) {
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
        returnHome={returnHome}
        cards={cards}
      />
    );
  }

  render() {
    const { background } = styles;

    return (
      <View style={background}>
        {this.renderComponent()}
      </View>

    );

  }
}
