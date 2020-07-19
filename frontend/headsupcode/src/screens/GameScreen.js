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
  const [deviceMotionActive, setDeviceMotionActive] = useState(true)
  const [cards, setCards] = UseState(props.navigation.state.params.deck.cards)


  useEffect(() => {
    checkDeviceMotion();
    randomizeCards();
  })

 const checkDeviceMotion = async () => {
    await DeviceMotion.isAvailableAsync()
      ? setDeviceMotionActive(true)
      : setDeviceMotionActive(false)
  }

 const randomizeCards = () => {
    const randomCards = cards
      .map((card) => ({ sort: Math.random(), ...card }))
      .sort((a, b) => a.sort - b.sort);

    setCards(randomCards)
  }

  const startTimer = () => {
    setTimer(setInterval(decrementTimer, 1000));
  }

 const decrementTimer = () => {
    setRemainingTime(remainingTime - 1)
  }

 const clearTimer = () => {
    clearInterval(timer);
    setTimer(null);
  }

  const currentCard = () => {
    return cards[cardIndex];
  }

  const nextCard = () => {  
    if (cardIndex < (cards.length - 1)) {
      setCardIndex( cardIndex + 1 );
    } else {
      setRemainingTime(0)
    }
  }

  const handleUserResponse = (isCorrect) => {
    const newCardsArray = cards
    newCardsArray[cardIndex].isCorrect = isCorrect;
    setCards(newCardsArray);
  }

 const returnHome = (event) => props.navigation.navigate('Home')

  const renderComponent = () => {
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
        returnHome={returnHome}
        cards={cards}
      />
    );
  }

    const { background } = styles;
    return (
      <View style={background}>
        {renderComponent()}
      </View>

    );

}
