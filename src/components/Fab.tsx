import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native'


interface Props {
    title: string,
    position?: 'br' | 'bl'
    onPress: () => void,
}


export const Fab = ({title, onPress, position='bl'}: Props) => {


    const ios = () => {
        return (
            <View
                style={
                    [styles.fabLocation,
                    (position === 'bl') ? styles.left : styles.right
                    ]
                    }
                >
                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={onPress}
                >
                    <View
                        style={styles.fab}
                    >
                        <Text style={styles.fabText}>
                            {title}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )

    }

    const android = () => {
        return (
            <View
                style={
                    [styles.fabLocation,
                    (position === 'bl') ? styles.left : styles.right
                    ]
                    }
                >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('cyan', false, 30)}

                >
                    <View
                        style={styles.fab}
                    >
                        <Text style={styles.fabText}>
                            {title}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }



  return (Platform.OS === 'android') ? ios(): android();
}


const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 10,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    // fabLocationBL: {
    //     position: 'absolute',
    //     bottom: 10,
    //     left: 25
    // },
    // fabLocationBR: {
    //     position: 'absolute',
    //     bottom: 10,
    //     right: 25
    // },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 9,
},
shadowOpacity: 0.48,
shadowRadius: 11.95,

elevation: 18,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'

    }
});