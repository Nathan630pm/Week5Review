import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './home';
import AboutScreen from './about';
import SettingsScreen from './settings';
import LoginScreen from './login';

export default createBottomTabNavigator({
    Home: HomeScreen,
    About: AboutScreen,
    Settings: SettingsScreen
})