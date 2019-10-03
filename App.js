import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './home';
import AboutScreen from './about';
import SettingsScreen from './settings';
import LoginScreen from './login';

const tabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  About: AboutScreen,
  Settings: SettingsScreen
})

export default createAppContainer(tabNavigator)


