import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Button, Alert, prompt, Modal } from 'react-native';
import firebase from './firebase';
import { TextInput } from 'react-native-gesture-handler';
import DialogInput from 'react-native-dialog-input';

// const firebase = firebase.database();
console.disableYellowBox = true;

export default class SettingsScreen extends Component {

    

    carDatabase = firebase.database().ref('car');

    state = {
        newData: '',
        cars: {},
        selectedId: '',
        modalVisible: false,
    }

    componentDidMount() {
        this.carDatabase.on('value', cars => {
            const carsJSON = cars.val();
            this.setState({ cars: carsJSON === null ? {} : carsJSON });


        })

        


    }

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         newData: '',
    //     }
    // }

    

    create = () =>{
        
        // console.log("data: " + this.state.newData);

        // alert(this.state.newData)

        this.carDatabase.push({ item: this.state.newData });
        this.setState({ newData: '' })
    }

    testAdd = () => {
        prompt(
            'Add new item...',
            null,
            [
                {
                    text: 'Add',
                    onPress: (text) => {
                        console.log("push")
                    }
                },
            ],
            'plain-text'
        );
    }

    

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Add item to your To-Do list:</Text>
                {/* <TextInput placeholder="New Item..." placeholderTextColor="grey" style={styles.TextInput}></TextInput> */}
                <TextInput placeholder="New Item..." placeholderTextColor="black" style={styles.TextInput} onChangeText={(newData) => this.setState({ newData })} value={this.state.newData}/>
                <Button title="Create Item" onPress={this.create}></Button>
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
    },
    TextInput: {
        backgroundColor: 'grey',
        height: 20,
        width: '100%',
        marginBottom: 30,
        textAlign: "center"
    },
    title: {
        fontSize: 30,
        top: 0,
        position: "absolute",
    },
});