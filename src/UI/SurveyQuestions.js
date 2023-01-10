// SurveyQuestions.js is the screen where users take a symptom survey check
// Once all questions are answered and submit btn is pressed, user is navigated to the previous screen

// imports
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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

const SurveyQuestions = ({ navigation }) => {

    return (

        <View style={styles.container}>
            
            <Text style={styles.baseText}>{"Have you experienced any of the following symptoms of COVID-19 within the last 48 hours?"}</Text>
            
                <Text style={styles.baseText}>{"Fever or Chills"}</Text>
                <View style={styles.buttons}>
                    <Button
                    title="YES"
                    />
                    <View style={styles.space}></View>
                    <Button
                        title="NO"
                    />
                </View>

            <Text style={styles.baseText}>{"Cough"}</Text>
            <View style={styles.buttons}>
                <Button
                    title="YES"
                />
                <View style={styles.space}></View>
                <Button
                    title="NO"
                />
            </View>

            <Text style={styles.baseText}>{"Shortness of breath or difficulty breathing"}</Text>
            <View style={styles.buttons}>
                <Button
                    title="YES"
                />
                <View style={styles.space}></View>
                <Button
                    title="NO"
                />
            </View>

            <Text style={styles.baseText}>{"Sore Throat"}</Text>
            <View style={styles.buttons}>
                <Button
                    title="YES"
                />
                <View style={styles.space}></View>
                <Button
                    title="NO"
                />
            </View>

            <Text style={styles.baseText}>{"Did you test positive for COVID 19?"}</Text>
            <View style={styles.buttons}>
                <Button
                    title="YES"
                />
                <View style={styles.space}></View>
                <Button
                    title="NO"
                />
            </View>

            <View style={styles.subButton}>
                <Button
                    title="SUBMIT"
                    onPress={() => navigation.navigate('Alameda County - COVID Dashboard', {})}
                />
            </View>

        </View>
    );
};

export default SurveyQuestions;

