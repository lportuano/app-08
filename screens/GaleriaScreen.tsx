import { useState } from 'react';
import { Alert, Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { supabase } from '../supabase/config';

import { File, Directory, Paths } from 'expo-file-system';

export default function GaleriaScreen() {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            Alert.alert('Permission required', 'Permission to access the media library is required.');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.1,
        });

        //console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    async function subirImagen() {

        if (!image) {
            return false
        }

        //crear una instancia de file desde una imagen
        const file = new File(image);

        //transformar a una matriz de bits
        const matrizBits = await file.bytes()


        const avatarFile = matrizBits
        const { data, error } = await supabase
            .storage
            .from('jugadores')
            .upload('usuarios/avatar3.png', avatarFile, {
                contentType: "image/png",
                upsert: false
            })

        console.log(traerURL());

    }

    function traerURL() {
        const { data } = supabase
            .storage
            .from('jugadores')
            .getPublicUrl('usuarios/avatar3.png')
        return data.publicUrl
    }

    return (
        <View style={styles.container}>
            <Button title="Galeria" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <Button
                title='subir'
                onPress={() => subirImagen()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 400,
        height: 400,
        resizeMode: "contain"
    },
});