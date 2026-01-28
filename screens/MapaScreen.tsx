import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';

export default function MapaScreen() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: -0.251991,
                    longitude: -78.516173,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});