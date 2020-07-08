import React, { useState, useEffect } from 'react';
import {View, StatusBar, ActivityIndicator} from 'react-native';
import { styles }  from '../styles/style';

const LandingScreen = ({navigation}) => {
  const URL = 'https://headsup-api.herokuapp.com/decks'
  const [decks, setDecks] = useState([])
  const [loading, setLoading ] = useState(true)

  useEffect(()=>{
    fetch(URL)
      .then((response) => response.json())
      .then( decks  => {
        setDecks(decks)
        setLoading(false)
      })
      .catch( error => {
        console.error(error)
      })
  }, [])

  const { background, cardContainer } = styles

  return (
    loading 
    ? <View style={background}>
        <StatusBar hidden={true} />
        <View style={cardContainer}>
          <ActivityIndicator size='large'/>
        </View>
      </View>
    : navigation.navigate('Home', {decks})
  )
};

export default LandingScreen
