// Resources.js is the screen which provides the COVID-19 resources

// imports

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        backgroundColor: '#e6d1f2'
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
        positon: 'absolute',
        width: 200,
        height: 200,
        marginLeft: 75
    }
});

const Resources = () => {

    return (

        <View style={styles.container}>

            <Text style={styles.baseText}>{"More Resources about COVID-19"}</Text>

            <Image
                style={styles.logo}
                source={require('../../assets/testing.png')}
            />

            <Text style={styles.baseText}>{"Test it, treat it, beat it"}</Text>

            <Text style={styles.smallText}>{"Starting COVID-19 treatments right away can make a big difference. If you test positive, contact your doctor for an appointment. COVID-19 treatments are free, widely available, and reduce the risk of serious illness."}</Text>



        </View>
    );
};

export default Resources;

