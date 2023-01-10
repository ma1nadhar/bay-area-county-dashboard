// Guidance.js is the screen which provides the Q&A portion of the app
// Provides the most common questions regarding COVID-19

// imports
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
        flexDirection: 'column',
        padding: 15
    }, item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    }, itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },itemText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    }, itemTextSub: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 15
    },

});

// scorollable
const Guidance = () => {

    return (
        <ScrollView>
        <View style={styles.container}>

                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <Text style={styles.itemText}>{"How can I prevent COVID-19?"}</Text>
                        <Text style={styles.itemTextSub}>{"The best way to prevent COVID-19 is to get vaccinated with an FDA-approved or FDA-authorized COVID-19 vaccine and stay up to date on your COVID-19 vaccines."}</Text>
                    </View>
                </View>   

                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <Text style={styles.itemText}>{"What treatments are available in the U.S. to treat COVID-19?"}</Text>
                        <Text style={styles.itemTextSub}>{"The FDA has approved and authorized treatments for COVID-19 for emergency use during this public health emergency."}</Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <Text style={styles.itemText}>{"Is hand sanitizer effective against COVID-19?"}</Text>
                        <Text style={styles.itemTextSub}>{"One of the best ways to prevent the spread of infections and decrease the risk of getting sick is by washing your hands with plain soap and water, advises the CDC. Washing hands often with soap and water for at least 20 seconds is essential, especially after going to the bathroom; before eating; and after coughing, sneezing, or blowing one’s nose. If soap and water are not available, CDC recommends consumers use an alcohol-based hand sanitizer that contains at least 60% alcohol."}</Text>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <Text style={styles.itemText}>{"Can I get the coronavirus from food, food packaging, or food containers and preperation area?"}</Text>
                        <Text style={styles.itemTextSub}>{"Currently there is no evidence of food, food containers, or food packaging being associated with transmission of COVID-19.  Like other viruses, it is possible that the virus that causes COVID-19 can survive on surfaces or objects."}</Text>
                    </View>
                </View>                      
        </View>
        </ScrollView>

    );
};

export default Guidance;
