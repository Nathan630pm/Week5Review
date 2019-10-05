import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from 'react';
import { View, Button, Text, Image } from 'react-native'; 



import LoginScreen from './login';
import Tabs from './tabs';

class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={require('./assets/N6Icon.jpeg')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

const stackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  tabs: {
    navigationOptions: ({ navigation }) => {
      return {
        headerMode: 'screen',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: <LogoTitle />,
        title: 'Nathan630pm.com',
        headerRight: (
          <Button
            style={{ color: 'white' }}
            onPress={() => { navigation.navigate('Login'); }}
            color="#FFF"
            title="Log Out"
            backgroundColor="#00A600"
          />
        ),
        headerStyle: {
          backgroundColor: '#00A600',
        },
      }},
    screen: Tabs
  }
},
  {
    headerMode: 'screen', // remove top bar and make full screen
    headerTransparent: true,
    navigationOptions: {
      headerVisible: true,
    },
    defaultNavigationOptions: { // remove swipe back gesture
      gesturesEnabled: false,
      headerLeft: null,
      headerMode: 'none'
    }}
)


export default createAppContainer(stackNavigator)


