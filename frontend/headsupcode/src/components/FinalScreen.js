import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScreenOrientation } from 'expo';
import { styles } from '../styles/style';

const FinalScreen = ({ cards, returnHome }) => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT_UP);
  }, []);

  const getCorrectCards = () => cards.filter((card) => card.isCorrect);

  const renderQuestions = () => {
    const answeredCards = cards.filter((card) => card.isCorrect || card.isCorrect === false);
    return answeredCards.map((card) => (card.isCorrect
      ? <Text style={styles.correctText} key={card.id}>{card.term}</Text>
      : <Text style={styles.passText} key={card.id}>{card.term}</Text>));
  };

  const {
    cardContainer, titleText, questionContainer, fullWidth,
  } = styles;

  return (
    <View style={cardContainer}>
      <Text style={titleText}>
        You Got
        {` ${getCorrectCards().length} `}
        right!
      </Text>
      <ScrollView style={questionContainer} contentContainerStyle={{ justifyContent: 'center' }}>
        <View>
          {renderQuestions()}
        </View>
      </ScrollView>
      <View style={fullWidth}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={(event) => returnHome(event)}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>New Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FinalScreen;
