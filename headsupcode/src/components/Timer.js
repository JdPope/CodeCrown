import React from 'react';
import { Text } from 'react-native';
import styles from '../styles/style';

const Timer = ({ time }) => {
  const { timerStyle } = styles;

  const calcuateTime = () => {
    const minutes = Math.trunc(time / 60);
    const secondsCalculation = `${time - (60 * minutes)}`;
    const seconds = secondsCalculation.length === 1 ? `0${secondsCalculation}` : secondsCalculation;
    return `${minutes}:${seconds}`;
  };

  return <Text style={timerStyle}>{calcuateTime()}</Text>;
};

export default Timer;
