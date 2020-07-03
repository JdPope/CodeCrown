import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Deck = () => {
    return <View style={styles.container}>
        <Text style={styles.title}>Deck</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        color:'blue'
    }
});

export default Deck