import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import firebase from './firebase';




export default class SettingsScreen extends Component {

    state = { text: 'Hello World', data: 'loading data... please wait' }


    // componentDidMount() {
    //     this.setState({ loading: true });
    //     this.props.firebase.IBMCounter().on('value', snapshot => {
    //         const usersObject = snapshot.val();
    //         const usersList = Object.keys(usersObject).map(key => ({
    //             ...usersObject[key],
    //             uid: key,
    //         }));
    //         this.setState({
    //             users: usersList,
    //             loading: false,
    //         });
    //     });
    // }

    


    // componentDidMount() {
    //     // firebase.database().ref('test').set({
    //     //     'test': 'test'
    //     // });

    //     firebase.firestore().collection("IBMCounter").on('value', res => {
    //         this.setState({ data: res })
    //     });
    // }

    render() {
        return (
            <View style={styles.container}>

                {/* <Text>{JSON.stringify(this.state.data)}</Text> */}
                <Text>Firebase settings are coming here soon!</Text>
                
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