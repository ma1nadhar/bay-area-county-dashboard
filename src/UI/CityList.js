// CityList.js uses the COVID-19 data for all the cities from Alameda County Open Data
// The data will begin by providing a list of all cities in Alameda County

// imports
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import cities from '../Resources/COVID_19_Cases_by_City_JSON';
import CityCard from '../UI/CityCard';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

// each city has a city card with more details about COVID-19
const CityList = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cities.sort((a, b) => a.Place.localeCompare(b.Place))}
                keyExtractor={item => item.GlobalID}
                renderItem={({ item }) => (
                    <CityCard city={item} navigation={navigation} />
                )}
            />
        </View>
    );
};

export default CityList;
