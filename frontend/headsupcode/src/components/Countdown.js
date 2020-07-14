import React, { Component } from 'react';
import { Animated, View } from 'react-native';
import { ScreenOrientation } from 'expo';
import { styles } from '../styles/style';

export default class Countdown extends Component {
    state = {
      countdownAnimation: new Animated.Value(450),
    }

    componentDidMount = () => {
      ScreenOrientation.lockAsync(ScreenOrientation.Orientation.LANDSCAPE_RIGHT);
      this.props.startTimer();
      this.startAnimation();
    }

    startAnimation = () => {
      Animated.loop(
        Animated.timing(this.state.countdownAnimation, {
          toValue: 200,
          duration: 1000,
        }), { iterations: 3 },
      ).start();
    }

    render() {
      const animatedStyle = {
        fontSize: this.state.countdownAnimation,
      };

      return (
        <View style={styles.gameCardContainer}>
          <Animated.Text style={[styles.countdownText, animatedStyle]}>
            {this.props.remainingTime.toString().slice(-1)}
          </Animated.Text>
        </View>
      );
    }
}
