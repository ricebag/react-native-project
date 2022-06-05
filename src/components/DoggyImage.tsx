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
                    // uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*',
                }}
            />
        </View>
    );
}

export default DoggyImage;