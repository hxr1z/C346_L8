import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Game = ({title, description, rating, imageUri, icon_name}) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.headerContainer}>
                <MaterialCommunityIcons name={icon_name} size={40} color='#333' />
                <Text style={styles.title}>{title}</Text>
            </View>

            <Image source={{uri: imageUri,}} style={styles.image} />

            <View style={styles.footerContainer}>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingLabel}>Rating:</Text>
                    <Text style={styles.ratingScore}>{rating}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#E4DAC2',
        borderRadius: 12,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 15,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        flex: 1,
        marginLeft: 10,
        color: 'black',
    },
    image: {
        width: '100%',
        height: 500,
        borderRadius: 12,
        marginBottom: 15,
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    description: {
        flex: 1,
        fontSize: 14,
        color: 'black',
        lineHeight: 20,
        marginRight: 10,
        textAlign: 'left',
    },
    ratingContainer: {
        alignItems: 'flex-end',
    },
    ratingLabel: {
        fontSize: 12,
        color: 'black',
    },
    ratingScore: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default Game;