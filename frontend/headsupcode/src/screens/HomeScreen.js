import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import LandingScreen from './LandingScreen'
const HomeScreen = () => {
    return <View style={styles.container}>
        <LandingScreen/>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
})

export default HomeScreen