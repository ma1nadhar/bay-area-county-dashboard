// DetailList.js provides all the COVID 19 details for a particular city
// Provides total covid cases, age group most affected, and total deaths

// imports
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    }, baseText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },logo: {
        width: 200,
        height: 200,
        margin: 70
        
    },
});

const DetailList = ({ route }) => {
    const { city } = route.params;

    const ageGroupVal = ageGroup(city);

    return (
        <View style={styles.container}>

            <Image
                style={styles.logo}
                source={require('../../assets/corona.jpg')}
            />

            <Text style={styles.baseText}>{"Covid Total: " + city.Total + " cases"}</Text>
            <Text style={styles.baseText}>{"Age Group Most Affected: " + ageGroupVal + " years"}</Text>
            <Text style={styles.baseText}>{"Deaths: " + city.Deaths + " people"}</Text>

        </View>
    );
};

export default DetailList;

// function to return the age group most affected based on Alameda County's JSON file
function ageGroup(city) {

    // push all age groups with covid cases numbers into an array
    let arrayAges = [];

    arrayAges.push(parseInt(city.F0_4), parseInt(city.F5_11), parseInt(city.F12_17), parseInt(city.F18_30), parseInt(city.F31_40),
    parseInt(city.F41_50), parseInt(city.F51_60), parseInt(city.F61_70), parseInt(city.F71_80), parseInt(city.F81_));

    let newArrayAges = [];

    // loop through array and add values to new array if value is a valid number
    for (let i = 0; i < arrayAges.length; i++) {
        
        if (arrayAges[i] >= 0) {

            newArrayAges.push(arrayAges[i])

        }
    }

    // identify the max value or number of covid cases
    var index = 0;
    let maxValue = Math.max.apply(Math, newArrayAges);

    for (let j = 0; j < arrayAges.length; j++) {
        console.log(arrayAges[j])
        if (maxValue == arrayAges[j]) {
            
            index = j;
        }
    }

    // based on index value, return the correct age group
    switch (index) {
        case 0:
            return "0 to 4";
        case 1:
            return "5 to 11";
        case 2:
            return "12 to 17";
        case 3:
            return "18 to 30";
        case 4:
            return "31 to 40";
        case 5:
            return "41 to 50";
        case 6:
            return "51 to 60";
        case 7:
            return "61 to 70";
        case 8:
            return "71 to 80";
        case 9:
            return "above 81";
        default:
            return "invalid";
    }
}
