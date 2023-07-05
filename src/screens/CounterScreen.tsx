import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {

    const [counter, setCounter] = useState(10);


  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Counter: {counter}
        </Text>

        <Fab
            title='-1'
            onPress={() => setCounter(counter - 1)}
        />

        <Fab
            title='+1'
            onPress={() => setCounter(counter + 1)}
            position='br'
        />

        {/* <TouchableOpacity
            onPress={() => setCounter(counter + 1)}
            style={styles.fabLocationBR}
        >
            <View
                style={styles.fab}
            >
                <Text style={styles.fabText}>
                    +1
                </Text>
            </View>
        </TouchableOpacity> */}

    </View>


  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 33,
        color: 'black',
        top: -30
    },
    
});
