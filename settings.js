import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>App Settings</Text>
                <Text>***NOTE: These settings are not funtional.***</Text>
                <View style={{ flex: 1, flexDirection: 'row' }}>

                    <Text>App Notifications:  </Text>
                    <Switch></Switch>

                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>

                    <Text>Sounds:  </Text>
                    <Switch></Switch>

                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>

                    <Text>Vibrations:  </Text>
                    <Switch></Switch>

                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>

                    <Text>Light/Dark theme:  </Text>
                    <Switch></Switch>

                </View>

                <Text style={styles.titleText}>App Information:</Text>
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