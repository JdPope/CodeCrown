import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import GameScreen from './src/screens/GameScreen'
import FinalScreen from './src/components/FinalScreen'

const decks ={
    decks:[
       {name:'react', cards:[{id:1, concept:'react one'}, {id:2, concept:'react two'}, {id:3, concept:'react three'}]},
       {name:'rails', cards:[{id:1, concept:'rails one'}, {id:2, concept:'rails two'}, {id:3, concept:'rails three'}]}
       ]
   }

const navigator = createStackNavigator({
    Home: HomeScreen,
    Game: GameScreen,
    Final: FinalScreen,
},{

    initialRouteName: 'Home',
    initialRouteParams: {...decks},

    defaultNavigationOptions: {
        headerShown: false,
    }
})

export default createAppContainer(navigator)
