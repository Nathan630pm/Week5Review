import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
export default class AboutScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>About Nathan630pm:</Text>
                <Image source={require('./assets/myFace.jpg')} style={{ width: 100, height: 100 }} />
                <Text>Oh, Hello there! I'm Nathan Kennedy, known online as "Nathan630pm"! Welcome to my app! Here's a little bit about me: </Text>
                <Text>I worked for McDonald's Canada for 4 years, to the day, July 21st 2015 - July 21st 2019. I miss my McFamily in Schomberg ON.</Text>
                <Text>I am currently in the Humber College "WEBD" program, learning all this! :D</Text>
                <Text>I currenly work for Canadas Wonderland as a Halloween Haunt Atmosphere Performer!</Text>
                <Text>If you'd like to learn more about me, or have any questions, email me at Nathan630pm@outlook.com!</Text>
                <Text style={styles.padding}></Text>
                <Text>©2019 Nathan630pm & Nathan630pm.com</Text>
                <Text>"The Best Time on The Clock. Hands Down."</Text>
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