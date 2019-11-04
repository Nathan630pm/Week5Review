import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Button} from 'react-native';
import firebase from './firebase';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import DialogInput from 'react-native-dialog-input';

// const firebase = firebase.database();


export default class SettingsScreen extends Component {

    carDatabase = firebase.database().ref('car');

    state = { cars: {}, selectedId: '', updateData: ''}

    componentDidMount() {
        this.carDatabase.on('value', cars => {
            const carsJSON = cars.val();
            this.setState({ cars: carsJSON === null ? {} : carsJSON });



            
        });

        
        
    }

   

    update() {
        if (this.state.selectedId === '') {
            alert("Please select an item first!");
            return;
        }
        this.carDatabase.child(this.state.selectedId)
            .set({ item: this.state.updateData })
        this.setState({ updateData: '', selectedId: ''})
    }

    deleteItem() {
        if (this.state.selectedId === '') {
            alert("Please select an item first!");
            return;
        }
        this.carDatabase.child(this.state.selectedId)
            .set(null)
        this.setState({selectedId: '', updateData: ''})
    }

   

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.topTitle}>To-Do List</Text>
                
                
                <View style={styles.todoEditor}>
                    <Text>Currently Selected Item:</Text>
                    <TextInput style={styles.TextInput} onChangeText={(updateData) => this.setState({ updateData })} value={this.state.updateData}></TextInput>
                    <View style={styles.buttons}>
                        <Button title="Update Item" onPress={() => this.update()}></Button>
                        <Button title="Delete Item" onPress={() => this.deleteItem()}></Button>
                    </View>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                </View>
                    <View style={styles.editArea}>
                        <Text></Text>
                        <Text style={styles.title}>To-Do list items:</Text>
                        <Text></Text>
                        {
                            Object.keys(this.state.cars).map((carID, index) =>
                                <TouchableOpacity key={index} onPress={() => this.setState({ selectedId: carID, updateData: this.state.cars[carID]['item'] })} >
                                    <Text style={styles.items}>- {`${JSON.stringify(this.state.cars[carID]['item'])}`}</Text>
                                </TouchableOpacity>
                            )
                        }
                            <Text></Text>
                    
                </View>
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
    },
    title: {
        fontSize: 30,
    },
    topTitle: {
        fontSize: 30,
        top: 0,
        position: "absolute",
    },
    editArea: {
        position: "absolute",
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
    },
    items: {
        padding: 5,
        fontSize: 15,
    },
    todoEditor: {
        paddingBottom: 5,
        width: '100%',
        textAlign: 'justify',
        position: 'absolute',
        top: 30,
    },
    buttons: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

});