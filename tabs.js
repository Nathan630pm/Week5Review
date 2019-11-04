import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './home';
import AboutScreen from './about';
import NewItem from './newitem';
import LoginScreen from './login';
import DataScreen from './data';

export default createBottomTabNavigator({
    Home: HomeScreen,
    About: AboutScreen,
    "New Item": NewItem,
    "To Do List": DataScreen
    
})