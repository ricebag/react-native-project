import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 150,
        height: 150,
    },
    logo: {
        width: 66,
        height: 58,
    },
});

const DoggyImage = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://i.pinimg.com/originals/08/43/c0/0843c0417d1d0464a71c838581c77e15.jpg',
                }}
            />
        </View>
    );
}

export default DoggyImage;