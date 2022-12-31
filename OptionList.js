import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#D5F5E3',
        flexWrap: 'wrap'
    },
    background: {
        height: 125,
        width: 125,
        backgroundColor: '#68BBE3',
        margin: 10,
        justifyContent: 'center',
    },

    baseText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    logo: {
        width: 500,
        height: 200,
        margin: 10
    },
});

const OptionList = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <Image
                style={styles.logo}
                source={require('../../assets/bluecovid.jpg')}
            />
                <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Cities in Alameda County', {})}>
                
                        <View style={styles.background}>
                            <Text style={styles.baseText} >{"Covid Statistics"}</Text>
                        </View>

                </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Survey Questions', { navigation })}>
  
                            <View style={styles.background}>
                                <Text style={styles.baseText} >{"Daily Symptom Survey"}</Text>
                            </View>

                </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>

                <View style={styles.background}>
                    <Text style={styles.baseText} >{"Result Tracker"}</Text>
                </View>

            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>

                <View style={styles.background}>
                    <Text style={styles.baseText} >{"Health Badge"}</Text>
                </View>

            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>

                <View style={styles.background}>
                    <Text style={styles.baseText} >{"Guidance"}</Text>
                </View>

            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>

                <View style={styles.background}>
                    <Text style={styles.baseText} >{"Resources"}</Text>
                </View>

            </TouchableWithoutFeedback>

        </View>
    );
};

export default OptionList;
