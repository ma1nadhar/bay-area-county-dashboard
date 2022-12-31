import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { SafeAreaView, StyleSheet } from 'react-native';

import CityList from '../src/UI/CityList';
import OptionList from '../src/UI/OptionList';
import DetailList from '../src/UI/DetailList';
import SurveyQuestions from '../src/UI/SurveyQuestions';

const Main = () => {
    return (
        <SafeAreaView style={styles.root}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        animationEnabled: false, // Animations mess with Jest and Testing Library
                    }}>
                    <Stack.Screen name="Alameda County - COVID Dashboard" component={OptionList} />
                    <Stack.Screen name="Cities in Alameda County" component={CityList} />
                    <Stack.Screen name="City Details" component={DetailList} />
                    <Stack.Screen name="Survey Questions" component={SurveyQuestions} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 10,
    },
});

export default Main;
