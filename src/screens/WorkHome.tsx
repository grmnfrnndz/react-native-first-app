import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const WorkHome = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}/>
            <View style={styles.cajaAzul}/>
            <View style={styles.cajaNaranja}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lime',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cajaMorada: {
        // flex: 2,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: 'purple',
        // alignSelf: 'flex-end',
        // top: 100
    },
    cajaAzul: {
        // flex: 2,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: 'blue',
        // alignSelf: 'center',
        // left: 100,
        top: 50
        
    },
    cajaNaranja: {
        // flex: 4,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        // backgroundColor: 'orange',
    }
});