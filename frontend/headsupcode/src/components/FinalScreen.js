import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import { ScreenOrientation } from 'expo'
import { TouchableOpacity} from 'react-native-gesture-handler'


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
        // console.log('render questions')
        return this.props.cards.map(card => {
            return card.isCorrect
                ? <Text style={styles.correctText} key={card.id}>{card.term}</Text>
                : <Text style={styles.passText} key={card.id}>{card.term}</Text>
        })
    }

    render() {
        const { cardContainer, titleText, questionContainer, contentContainer } = styles

        return ( 
            <View style={cardContainer}>
                <Text style={titleText}>You Got {this.getCorrectCards().length} right!</Text>
                <ScrollView style={questionContainer} contentContainerStyle={contentContainer}>
                    {this.renderQuestions()}
                </ScrollView>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => this.props.returnHome(event)}
                    style={styles.appButtonContainer}
                >
                    <Text style={styles.appButtonText}>New Game</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const color = {
    green: 'hsla(161, 92%, 15%, 1)',
    lightGreen: 'hsla(63, 28%, 72%, 1)',
    yellow: 'hsla(49, 90%, 56%, 1)',
    orange: 'hsla(16, 88%, 57%, 1)',
    red: 'hsla(5, 62%, 41%, 1)',
    white: '#FFF'
}

const { green, lightGreen, yellow, orange, red, white  } = color

const styles = StyleSheet.create({

    cardContainer: {
        flex: 1,
        marginTop: 15,
        padding: 20,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomWidth: 0,
        borderWidth: 15,
        borderColor: '#FFF',
        backgroundColor: red,
        overflow: 'hidden',
        alignItems: 'center',
    },

    titleText: {
        fontSize: 35,
        paddingBottom: 20,
        fontWeight: 'bold',
        color: white,
    },

    questionContainer: {
        flex: 1,
        width: '100%',
    },

    contentContainer: {
        justifyContent: 'center'
    },

    correctText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: white,
    },

    passText: {
        fontSize: 30,
        color: white,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: yellow,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
      appButtonText: {
        fontSize: 18,
        color: white,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})

