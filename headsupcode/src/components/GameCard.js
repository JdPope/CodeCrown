import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScreenOrientation } from 'expo';
import { DeviceMotion } from 'expo-sensors';
import styles from '../styles/style';
import Timer from './Timer';
import Flip from './Flip';

const GameCard = ({
  remainingTime, card, clearTimer, deviceMotionActive, handleUserResponse, nextCard,
}) => {
  const [data, setData] = useState({});
  const [isRotated, setIsRotated] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isFlippable, setIsFlippable] = useState(false);

  const checkForRotation = () => {
    const { rotation } = data;

    if (rotation) {
      if (rotation.gamma > 2.5 && rotation.gamma < 2.8 && isFlippable) {
        setIsRotated(true);
        setIsCorrect(true);
        setIsFlippable(false);
      } else if (rotation.gamma < 1.3 && rotation.gamma > 1.0 && isFlippable) {
        setIsRotated(true);
        setIsCorrect(false);
        setIsFlippable(false);
      } else if (rotation.gamma < 2.2 && rotation.gamma > 1.7 && !isFlippable) {
        setIsFlippable(true);
      }
    }
  };

  const startDeviceMotionListener = () => {
    if (deviceMotionActive) {
      DeviceMotion.addListener((newData) => {
        setData({ newData });
        DeviceMotion.setUpdateInterval(100);
        return !isRotated ? checkForRotation() : null;
      });
    }
  };

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE_RIGHT);
    startDeviceMotionListener();
    return () => {
      clearTimer();
      return deviceMotionActive
        ? DeviceMotion.removeAllListeners()
        : null;
    };
  }, []);

  const unsetFlip = () => {
    handleUserResponse(isCorrect);
    setIsRotated(false);
    setIsCorrect(null);
    nextCard();
  };

  const onPressCorrect = () => {
    handleUserResponse(true);
    nextCard();
  };

  const onPressPass = () => {
    handleUserResponse(false);
    setIsRotated(false);
    setIsCorrect(null);
    nextCard();
  };

  const deviceMotionRender = () => {
    const { gameCardContainer, titleText } = styles;

    return isRotated
      ? <Flip isCorrect={isCorrect} unsetFlip={unsetFlip} />
      : (
        <View style={gameCardContainer}>
          <Text style={titleText}>{card.term}</Text>
          <Timer time={remainingTime} />
        </View>
      );
  };

  const nonDeviceMotionRender = () => {
    const {
      gameCardContainer, titleText, appButtonContainer, appButtonText,
    } = styles;
    return (
      <View style={gameCardContainer}>
        <Text style={titleText}>{card.term}</Text>
        <Timer time={remainingTime} />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPressCorrect}
          style={appButtonContainer}
        >
          <Text style={styles.appButtonText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPressPass}
          style={appButtonContainer}
        >
          <Text style={appButtonText}>Pass</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return deviceMotionActive
    ? deviceMotionRender()
    : nonDeviceMotionRender();
};

export default GameCard;
