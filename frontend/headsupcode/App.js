import React, { useState, useEffect } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import GameScreen from './src/screens/GameScreen'
import FinalScreen from './src/components/FinalScreen'
import LandingScreen from './src/screens/LandingScreen'

const App  = () =>{
const URL = 'https://headsup-api.herokuapp.com/decks'
  const [decks, setDecks] = useState([])


  useEffect(()=>{
    fetch(URL)
      .then((response) => response.json())
      .then( decks  => {
        setDecks(decks)
      })
      .catch( error => {
        console.error(error)
      })
  }, [])
}
const navigator = createStackNavigator({
    Home: HomeScreen,
    Game: GameScreen,
    Final: FinalScreen,
    Landing:LandingScreen,
},{
    initialRouteName: 'Home',
    initialRouteParams:{
        decks:decks
    },
    defaultNavigationOptions: {
        headerShown: false,
    }
})

export default createAppContainer(navigator)
