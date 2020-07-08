import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { TouchableOpacity} from 'react-native-gesture-handler'
import { ScreenOrientation } from 'expo'
import { styles }  from '../styles/style';

export default class FinalScreen extends Component {

  componentDidMount = () => {
    ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT_UP)
  }

  getCorrectCards = () => {
    return this.props.cards.filter(card => {
      return card.isCorrect
    })
  }

  renderQuestions = () => {
    const answeredCards = this.props.cards.filter(card => {
      return card.isCorrect || card.isCorrect === false
    })
    return answeredCards.map(card => {
      return card.isCorrect
        ? <Text style={styles.correctText} key={card.id}>{card.term}</Text>
        : <Text style={styles.passText} key={card.id}>{card.term}</Text>
    })
  }

  render() {
    const { cardContainer, titleText, questionContainer, contentContainer, fullWidth } = styles

    return ( 
      <View style={cardContainer}>
        <Text style={titleText}>You Got {this.getCorrectCards().length} right!</Text>
        <ScrollView style={questionContainer} contentContainerStyle={{justifyContent: 'center'}}>
          <View>
            {this.renderQuestions()}
          </View>
        </ScrollView>
        <View style={fullWidth}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={(event) => this.props.returnHome(event)}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}>New Game</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
