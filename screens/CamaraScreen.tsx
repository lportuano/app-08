import { useState } from 'react';
import { Alert, Image, View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function CamaraScreen() {
    const [image, setImage] = useState<string | null>(null);

    const takePhoto = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (!permissionResult.granted) {
            Alert.alert(
                'Permiso necesario',
                'Para tomar fotos, necesitamos que aceptes los permisos de la cámara.'
            );
            return;
        }

        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Captura el Momento</Text>

            <View style={styles.previewContainer}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.image} />
                ) : (
                    <View style={styles.noPhoto}>
                        <Ionicons name="camera-outline" size={100} color="#E0E0E0" />
                        <Text style={styles.noPhotoText}>Presiona el botón para empezar</Text>
                    </View>
                )}
            </View>

            <View style={styles.controls}>
                <TouchableOpacity
                    style={styles.shutterButton}
                    onPress={takePhoto}
                    activeOpacity={0.8}
                >
                    <View style={styles.innerCircle}>
                        <Ionicons name="camera" size={32} color="#FF4757" />
                    </View>
                </TouchableOpacity>
                <Text style={styles.instruction}>Tocar para capturar</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E2C', // Fondo oscuro moderno
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 60,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        letterSpacing: 0.5,
    },
    previewContainer: {
        width: width * 0.85,
        height: width * 1.1, // Un poco más alta que ancha
        borderRadius: 25,
        backgroundColor: '#2D2D44',
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#3D3D5C',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    noPhoto: {
        alignItems: 'center',
    },
    noPhotoText: {
        color: '#7F7F9E',
        marginTop: 15,
        fontSize: 14,
    },
    controls: {
        alignItems: 'center',
    },
    shutterButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(255, 71, 87, 0.2)', // Rojo suave circular
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#FF4757',
    },
    innerCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    instruction: {
        color: '#FFFFFF',
        marginTop: 10,
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
});