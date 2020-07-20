import React, { useState, useEffect } from 'react';
import { Animated, View, TouchableHighlightBase } from 'react-native';
import { ScreenOrientation } from 'expo';
import { styles } from '../styles/style';

const Countdown = ({ toggle, remainingTime }) => {
  console.log('remaining time', remainingTime)
  const [countdownAnimation] = useState(new Animated.Value(450));

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(countdownAnimation, {
        toValue: 200,
        duration: 1000,
      }), { iterations: 3},
    ).start();
  };

  const animatedStyle = {
    fontSize: countdownAnimation,
  };
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE_RIGHT);
    toggle();
    startAnimation();
  }, []);

  return (
    console.log(remainingTime, 'rem'),
    <View style={styles.gameCardContainer}>
      <Animated.Text style={[styles.countdownText, animatedStyle]}>
        {remainingTime.toString().slice(-1)}
      </Animated.Text>
    </View>
  );
};

export default Countdown;
