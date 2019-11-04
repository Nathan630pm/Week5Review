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


        //     var tasks = []
        //     cars.forEach((child) => {
        //         tasks.push({
        //             item: child.val().title,
        //             key: child.key
        //         });
        //     });

        //     this.setState({
        //         cars: this.state.cars.cloneWithRows(tasks)
        //     });

            
        });

        firebase.database().ref('car').once('value', (data) => {
            console.log("DATA: " + data.val());
        });
        
    }

   

    update() {
        if (this.state.selectedId === '') {
            alert("Please select an item first!");
            return;
        }
        // alert('Heading', 'Body', [{ text: 'option1', onPress: () => handler }])
        this.carDatabase.child(this.state.selectedId)
            .set({ item: this.state.updateData })
        this.setState({ updateData: '' })
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
                <Text style={styles.title}>To-Do List</Text>
                <Text>Currently Selected Item:</Text>
                <TextInput style={styles.TextInput} onChangeText={(updateData) => this.setState({ updateData })} value={this.state.updateData}></TextInput>
                <Button title="Update" onPress={() => this.update()}></Button>
                <Button title="Delete" onPress={() => this.deleteItem()}></Button>
                <Text></Text>
                <Text style={styles.title}>To-Do list items:</Text>
                <Text></Text>
                {
                    Object.keys(this.state.cars).map((carID, index) =>
                        <TouchableOpacity key={index} onPress={() => this.setState({ selectedId: carID, updateData: this.state.cars[carID]['item']})} >
                            <Text>{`${JSON.stringify(this.state.cars[carID]['item'])}`}</Text>
                        </TouchableOpacity>


                    )

                
                }
                

                <Text></Text>
                <Text></Text>
                <Text></Text>
                
                
                

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
    }
});