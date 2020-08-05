import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/style';

const Flip = ({ unsetFlip, isCorrect }) => {
  useEffect(() => {
    setTimeout(() => unsetFlip(), 1000);
  }, []);

  const {
    gameCardContainer, flipText, green, orange,
  } = styles;

  return (
    <View style={gameCardContainer} style={isCorrect ? green : orange}>
      <Text style={flipText}>{isCorrect ? 'Correct' : 'Pass'}</Text>
    </View>
  );
};

export default Flip;
