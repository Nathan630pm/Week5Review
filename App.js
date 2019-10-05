import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from 'react';
import { View, Button, Text } from 'react-native'; 



import LoginScreen from './login';
import Tabs from './tabs';


const stackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  tabs: {
    navigationOptions: {
      headerMode: 'screen',
      title: 'Home',
      headerRight: (
        <Button
          style={{ color: 'white' }}
          onPress={() => athis.props.navigation.navigate('Login')}
          color="#FFF"
          title="Log Out"
          backgroundColor="#00A600"
        />
      ),
    },
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


