// ResultTracker.js allows a user to enter their test result and add to history screen
// User can also delete a test result from their history screen

import React, { useState } from 'react';
import { StyleSheet, Text, View, Keyboard, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

import ResultTrackerCard from '../UI/ResultTrackerCard';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20
    }, sectionTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    }, items: {
        marginTop: 15
    }, writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }, input: {
        paddingVertical: 15,
        width: 250,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1
    }, addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1
    }, smallText: {
        fontWeight: 'bold',
        color: 'blue',
        fontSize: 18,
        textAlign: 'left',
    },
});

const ResultTracker = () => {

    
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss()
        setTaskItems([...taskItems, task])
        setTask(null)
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>{"Results History"}</Text>
                <Text style={styles.smallText}>{"Click to delete a result!!"}</Text>
                <View style={styles.items}>
                    {

                        taskItems.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                    <ResultTrackerCard  text={item} />
                                </TouchableOpacity>
                                
                                )
                        })

                    }

                </View>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder={'Add a new result'} value={task} onChangeText={text => setTask(text)}></TextInput>

                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>

            </KeyboardAvoidingView>

        </View>
    );
};

export default ResultTracker;
