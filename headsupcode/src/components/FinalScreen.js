import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
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
        return this.props.cards.map(card => {
            return card.isCorrect
                ? <Text style={styles.correctText} key={card.id}>{card.question}</Text>
                : <Text style={styles.passText} key={card.id}>{card.question}</Text>
        })
    }

    render() {
        const { cardContainer, titleText, questionContainer, contentContainer } = styles

        return ( 
            <View style={cardContainer}>
                <Text style={titleText}>You Got {this.getCorrectCards().length} right!</Text>
              <ScrollView style={questionContainer} contentContainerStyle={{justifyContent: 'center'}}>
                    {this.renderQuestions()}
                </ScrollView>
            </View>
        )
    }
}

