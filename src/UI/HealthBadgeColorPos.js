// HealthBadgeColorPos.js displays a RED screen when the COVID-19 test result is POSITIVE

// imports
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        backgroundColor: '#faa0a0'
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

const HealthBadgeColorPos = () => {

    return (

        <View style={styles.container}>

            <Text style={styles.baseText}>{"COVID-19 TEST BADGE"}</Text>

            <Image
                style={styles.logo}
                source={require('../../assets/redcross.png')}
            />

            <Text style={styles.baseText}>{"POSITIVE RESULT"}</Text>

            <Text style={styles.smallText}>{"the virus was detected and you have an infection so make sure to isolate and take precautions"}</Text>



        </View>
    );
};

export default HealthBadgeColorPos;

