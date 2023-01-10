// HealthBadge.js containes the screen where a user shares there COVID-19 test result
// Positive or Negative Button will navigate to the appropriate screen

// imports
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
    }, baseText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
        textAlign: 'left',
        margin: 10,
    }, logo: {
        width: 200,
        height: 200,
        margin: 70
    }, buttons: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        left: 10,
        justifyContent: 'flex-start',
    }, space: {
        width: 10, // or whatever size you need
        height: 10,
    },
    subButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
});

const HealthBadge = ({ navigation }) => {

    return (

        <View style={styles.container}>

            <Text style={styles.baseText}>{"COVID-19 TEST RESULT"}</Text>

            <View style={styles.buttons}>
                <Button
                    title="POSITIVE"
                    onPress={() => navigation.navigate('Health Badge Positive', {})}
                />
                <View style={styles.space}></View>
                <Button
                    title="NEGATIVE"
                    onPress={() => navigation.navigate('Health Badge Negative', {})}
                />
            </View>

        </View>
    );
};

export default HealthBadge;

