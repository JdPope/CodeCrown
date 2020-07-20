import React, {useState, useEffect} from 'react';
import { View, Button } from 'react-native';
import { DeviceMotion } from 'expo-sensors';
import { styles } from '../styles/style';
import Countdown from '../components/Countdown';
import GameCard from '../components/GameCard';
import FinalScreen from '../components/FinalScreen';

const GameScreen = (props) => {
  const [cardIndex, setCardIndex] = useState(0)
  const [deviceMotionActive, setDeviceMotionActive] = useState(true)
  const [cards, setCards] = useState(props.navigation.state.params.deck.cards)
  const [remainingTime, setRemainingTime] = useState(63);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    checkDeviceMotion();
    randomizeCards();
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemainingTime(remainingTime => remainingTime - 1);
      }, 1000);
    } else if (!isActive && remainingTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingTime]);

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

  const toggle = () => {
    setIsActive(!isActive);
  }

  const clearTimer = () =>{
    setRemainingTime(63);
    setIsActive(false);
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
          toggle={toggle}
          remainingTime={remainingTime} 
        /> 
      );
    }
    if (remainingTime > 0) {
      return (
        <GameCard
          remainingTime={remainingTime}
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
export default GameScreen