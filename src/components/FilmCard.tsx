import React from 'react';
import { Animated, View, Image, StyleSheet } from 'react-native';
import { Text, } from './Themed';

type Film = {
    Title: string
    Year: string
    Rated: string
    Released: string
    Runtime: string
    Genre: string
    Director: string
    Writer: string
    Actors: string
    Plot: string
    Language: string
    Country: string
    Awards: string
    Poster: string
    Ratings: any[]
    Metascore: string
    imdbRating: string
    imdbVotes: string
    imdbID: string
    Type: string
    totalSeasons: string
    Response: string
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    Card: {
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        margin: 10,
        // padding: 10,
        borderRadius: 20,
    },
    info: {
        borderTopColor: 'black',
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        backgroundColor: 'lightgrey',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    poster: {
        width: 160,
        height: 240,
    },
    logo: {
        width: 66,
        height: 58,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

const FilmCard = ({ film }: { film: Film }) => (
    <View style={styles.container}>
        <View>
        {/* <Animated.View
            style={styles.Card}
            onTouchStart={e => {
                console.log({ e, nativeEvent: e.nativeEvent, y: e.nativeEvent.pageY })
                return this.touchY = e.nativeEvent.pageY
            }}
            onTouchEnd={e => {
                if (this.touchY - e.nativeEvent.pageY > 20)
                    console.log('Swiped up')
            }}
        > */}

            <Text style={styles.title}>{film.Title}</Text>
            <Image
                style={styles.poster}
                source={{
                    uri: film.Poster,
                }}
            />
            <View style={styles.info}>
                <Text >{film.Plot}</Text>
            </View>
        {/* </Animated.View> */}
        </View>
    </View>
)

export default FilmCard;