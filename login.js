import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { createStackNavigator } from 'react-navigation-stack';
// import Tabs from './tabs';
class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('./assets/N6Icon.jpeg')}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}



export default class username extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: 'username' };
    }

    static navigationOptions = {
        title: "Nathan630pm | Login" ,
        headerLeft: <LogoTitle />,
        headerRight: (
            <Button
                style={{ color: 'white' }}
                onPress={() => alert('The username and password textboxes are just there for detials. just press "Log In" to proceed into the app.')}
                color="#FFF"
                title="App Info"
                backgroundColor="#00A600"
            />
        ),
        headerStyle: {
            backgroundColor: '#00A600',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Nathan630pm.com | Login</Text>
                
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, backgroundColor: 'white' }}
                    onChangeText={text => this.setState({ text })}
                    value={"username"}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, backgroundColor: 'white' }}
                    onChangeText={text => this.setState({ text })}
                    value={"password"}
                />
                <Button onPress={
                    () =>
                    this.props.navigation.navigate('tabs')
                }
                title="Log In"> </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa900',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 30,
    }
});