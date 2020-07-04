import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import GameScreen from './src/screens/GameScreen'
import FinalScreen from './src/components/FinalScreen'

// const decks = {}

// fetch('https://headsup-api.herokuapp.com/decks')
//     .then(response =>response.json())
//     // .then(result => console.log(result))
//     .then(result => decks = result)

const decks = {
    decks:[
       {name:'React', img:'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2076&q=80', cards:[{id:1, concept:'react one'}, {id:2, concept:'react two'}, {id:3, concept:'react three'}]},
       {name:'Rails', img:'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2076&q=80', cards:[{id:1, concept:'rails one'}, {id:2, concept:'rails two'}, {id:3, concept:'rails three'}]},
       {name:'JS', img:'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2076&q=80',cards:[{id:1, concept:'js one'}, {id:2, concept:'js two'}, {id:3, concept:'js three'}]},
       {name:'Ruby', img:'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2076&q=80', cards:[{id:1, concept:'ruby one'}, {id:2, concept:'ruby two'}, {id:3, concept:'ruby three'}]}
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
