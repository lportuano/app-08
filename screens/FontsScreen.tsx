import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

export default function FontsScreen() {
    /////////////////////////////////////////////////////////////
    const [loaded, error] = useFonts({
        'game': require('../assets/Fonts/game.ttf'),
    });
    ////////////////////////////////////////////////////////////

    return (
        <View>
            <Text style={styles.txt1}>Videojuegos</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa enim asperiores voluptas, dolor vel officiis accusamus illum accusantium! Ratione quo tempora delectus qui aspernatur excepturi minus necessitatibus quis architecto similique!</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    txt1: {
        fontSize: 50,
        fontFamily: 'game',
        textAlign: "center"
    }
})