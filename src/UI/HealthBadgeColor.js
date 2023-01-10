// HealthBadgeColor.js displays a GREEN screen when the COVID-19 test result is NEGATIVE

// imports
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        backgroundColor: '#afe1af'
    }, baseText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 35,
        textAlign: 'center',
        margin: 10,
    }, smallText: {
        fontWeight: 'bold',
        color: 'blue',
        fontSize: 20,
        textAlign: 'center',
        margin: 5,
    }, logo: {
        width: 200,
        height: 200,
        margin: 70
    }
});

const HealthBadgeColor = () => {

    return (

        <View style={styles.container}>

            <Text style={styles.baseText}>{"COVID-19 TEST BADGE"}</Text>

            <Image
                style={styles.logo}
                source={require('../../assets/greencheck.png')}
            />

            <Text style={styles.baseText}>{"NEGATIVE RESULT"}</Text>

            <Text style={styles.smallText}>{"test did not detect the virus, but this doesn't rule out that you could have an infection"}</Text>



        </View>
    );
};

export default HealthBadgeColor;

