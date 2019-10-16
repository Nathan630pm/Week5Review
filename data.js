import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Button } from 'react-native';
import firebase from './firebase';
import { TextInput } from 'react-native-gesture-handler';

// const firebase = firebase.database();


export default class SettingsScreen extends Component {

    carDatabase = firebase.database().ref('car');

    state = { cars: {}, selectedId: '' }

    componentDidMount() {
        this.carDatabase.on('value', cars => {
            const carsJSON = cars.val();
            this.setState({ cars: carsJSON === null ? {} : carsJSON });
        })

        
    }

    create() {
        this.carDatabase
            .push({ color: 'green' });
    }

    update() {
        if (this.state.selectedId === '') {
            alert("Please select an item first!");
            return;
        }
        this.carDatabase.child(this.state.selectedId)
            .set({ color: "orange" })
    }

    deleteCar() {
        if (this.state.selectedId === '') {
            alert("Please select an item first!");
            return;
        }
        this.carDatabase.child(this.state.selectedId)
            .set(null)
        this.setState({selectedId: ''})
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput value={this.state.selectedId} style={styles.TextInput}></TextInput>
                <Button title="Create" onPress={() => this.create()}></Button>
                <Button title="Update" onPress={() => this.update()}></Button>
                <Button title="Delete" onPress={() => this.deleteCar()}></Button>
                {
                    Object.keys(this.state.cars).map((carID, index) =>
                        <TouchableOpacity key={index} onPress={() => this.setState({ selectedId: carID})} >
                            <Text>{`${carID}: ${JSON.stringify(this.state.cars[carID])}`}</Text>
                        </TouchableOpacity>
                    )
                }

                
                

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
        backgroundColor: 'green',
        height: 20,
        width: '100%',
        marginBottom: 30,
        textAlign: "center"
    }
});