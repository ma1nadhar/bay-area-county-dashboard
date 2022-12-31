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
