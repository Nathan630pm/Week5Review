import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import LoginScreen from './login';

export default class HomeScreen extends Component {

    

    static navigationOptions = {
        title: 'Home',
        header: {
            visible: false
        },
        headerMode: 'none',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen is open</Text>

                <Button onPress={
                    () =>
                        this.props.navigation.navigate('Login')
                }
                    title="Log Out"> </Button>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
