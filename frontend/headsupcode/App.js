import {createAppContainer} from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import GameScreen from './src/screens/GameScreen'
import FinalScreen from './src/components/FinalScreen'
import LandingScreen from './src/screens/LandingScreen'

const navigator = createStackNavigator({
    Home: HomeScreen,
    Game: GameScreen,
    Final: FinalScreen,
    Landing:LandingScreen,
},{
    initialRouteName: 'Landing',
    defaultNavigationOptions: {
        headerShown: false,
    }
})

export default createAppContainer(navigator)
