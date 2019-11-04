import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from 'react';
import { View, Button, Text, Image } from 'react-native'; 



import LoginScreen from './login';
import Tabs from './tabs';
import Animated from 'react-native-reanimated';
import { create } from 'uuid-js';
import { Updates } from 'expo';





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
        title: 'Nathan630pm',
        headerRight: (
          <Button
            style={{ color: 'white', underlayColor: '#000'}}
            onPress={() => { navigation.navigate('Login'); }}
            color="#FFF"
            raised={true}
            theme='dark'
            overrides={true}
            tintColor= "#3fffff"
            title="Log Out"
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


