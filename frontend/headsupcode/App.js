import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/HomeScreen';
import Game from './src/screens/GameScreen';
import Final from './src/components/FinalScreen';
import Landing from './src/screens/LandingScreen';

const navigator = createStackNavigator({
  Home,
  Game,
  Final,
  Landing,
}, {
  initialRouteName: 'Landing',
  defaultNavigationOptions: {
    headerShown: false,
  },
});

export default createAppContainer(navigator);
