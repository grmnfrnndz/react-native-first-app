import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>

            <View style={styles.cajaMorada}></View>
            <View style={styles.cajaNaranja}></View>
            <View style={styles.cajaVerde}></View>
            <View style={styles.cajaCafe}></View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: 400,
        height: 400,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'yellow',
    }, 
    cajaMorada: {
        backgroundColor: 'purple',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0

        
    }, 
    cajaNaranja: {
        backgroundColor: 'orange',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0
    }, 
    cajaVerde: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0
    }, 
    cajaCafe: {
        backgroundColor: 'brown',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0
    }
});