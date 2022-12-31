import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 2,
    },
    item: {
        paddingLeft: 10,
        fontSize: 18,
    },
    teenyLogo: {
        width: 20,
        height: 20,
    },
});

const CityCard = ({ city, navigation }) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate('City Details', { city: city })}>
            <View style={styles.container}>
                <Text style={styles.item}>{city.Place}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default CityCard;
