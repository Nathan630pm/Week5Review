import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, Animated } from 'react-native';

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

    fade1 = new Animated.Value(0);
    fade2 = new Animated.Value(0);
    fade3 = new Animated.Value(0);
    fade4 = new Animated.Value(0);

    spring1 = new Animated.Value(-50);

    componentDidMount() {
        Animated.timing(this.fade1, {
            duration: 1000,
            toValue: 1
        }).start()

        Animated.timing(this.fade2, {
            duration: 2000,
            toValue: 1
        }).start()

        Animated.timing(this.fade3, {
            duration: 3000,
            toValue: 1
        }).start()

        Animated.timing(this.fade4, {
            duration: 4000,
            toValue: 1
        }).start()

        Animated.spring(this.spring1, {
            toValue: 0,
            speed: 0,
            bounciness: 10
        }).start()
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.Text style={{ ...styles.titleText, opacity: this.fade1}}>Nathan630pm News:</Animated.Text>
                <Animated.Text style={{opacity: this.fade1}}>Welcome to the new app! This is the first stages of the Nathan630pm.com app! I plan to eventually link this up with my Minecraft server, to allow players to check in on who's online, and check the latest server updates!</Animated.Text>
                <Text style={styles.padding}></Text>
                <Animated.Text style={{ ...styles.titleText, opacity: this.fade2 }}>Add Nathan on social media:</Animated.Text>
                <Animated.Text style={{opacity: this.fade2}}>@Nathan630pm</Animated.Text>
                <Animated.View style={{flex: 1, flexDirection: 'row', left: this.spring1}}>
                    <Image source={require('./assets/twitterLogo.png')} style={{ width: 100, height: 100 }} />
                    <Image source={require('./assets/instaLogo.jpg')} style={{ width: 100, height: 100 }} />
                    <Image source={require('./assets/snapLogo.png')} style={{ width: 100, height: 100 }} />
                </Animated.View>
                {/* <Text style={styles.padding}></Text> */}
                <Animated.Text style={{ ...styles.titleText, opacity: this.fade3 }}>App Information:</Animated.Text>
                <Animated.Text style={{ opacity: this.fade3 }}>©2019 Nathan630pm & Nathan630pm.com</Animated.Text>
                <Animated.Text style={{ opacity: this.fade3 }}>"The Best Time on The Clock. Hands Down."</Animated.Text>
                <Text style={styles.padding}></Text>
                <Animated.Text style={{ ...styles.titleText, opacity: this.fade4 }}>Email me!</Animated.Text>
                <Animated.Text style={{ opacity: this.fade4 }}>Nathan630pm@outlook.com</Animated.Text>
                
                
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
