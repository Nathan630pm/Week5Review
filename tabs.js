import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './home';
import AboutScreen from './about';
import SettingsScreen from './settings';
import LoginScreen from './login';
import DataScreen from './data';

export default createBottomTabNavigator({
    Home: HomeScreen,
    About: AboutScreen,
    Settings: SettingsScreen,
    Data: DataScreen
    
})