import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

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
                <Text style={styles.titleText}>Nathan630pm News:</Text>
                <Text>Welcome to the new app! This is the first stages of the Nathan630pm.com app! I plan to eventually link this up with my Minecraft server, to allow players to check in on who's online, and check the latest server updates!</Text>
                <Text style={styles.padding}></Text>
                <Text style={styles.titleText}>Add Nathan on social media:</Text>
                <Text>@Nathan630pm</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Image source={require('./assets/twitterLogo.png')} style={{ width: 100, height: 100 }} />
                    <Image source={require('./assets/instaLogo.jpg')} style={{ width: 100, height: 100 }} />
                    <Image source={require('./assets/snapLogo.png')} style={{ width: 100, height: 100 }} />
                </View>
                {/* <Text style={styles.padding}></Text> */}
                <Text style={styles.titleText}>App Information:</Text>
                <Text>©2019 Nathan630pm & Nathan630pm.com</Text>
                <Text>"The Best Time on The Clock. Hands Down."</Text>
                <Text style={styles.padding}></Text>
                <Text style={styles.titleText}>Email me!</Text>
                <Text>Nathan630pm@outlook.com</Text>
                
                
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
    },
    titleText: {
        fontSize: 30,
    },
    padding: {
        padding: 10,
    }
});
