import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import GameScreen from './src/screens/GameScreen'
import FinalScreen from './src/components/FinalScreen'

//need a function that gets passed down->home ->deck - you push a button - it creates an instance of gamescreen
//with that deck's data

//need to take in decks data here ->don't need to pass it all down...eh can for nowd


const decks ={
    decks:[
       {name:'react', cards:['one', 'two', 'three']},
       {name:'rails', cards:['one', 'two', 'three']}
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
