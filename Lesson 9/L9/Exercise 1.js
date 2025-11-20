// Exercise 1 - Step 1: Import FlatList, StyleSheet, TouchableOpacity
import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

// Step 2: Create Data
const datasource = [
    {key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'},
    {key: 'f'}, {key: 'g'}, {key: 'h'}, {key: 'i'}, {key: 'j'},
    {key: 'k'}, {key: 'l'}, {key: 'm'}, {key: 'n'}, {key: 'o'},
    {key: 'p'}, {key: 'q'}, {key: 'r'}, {key: 's'}, {key: 't'},
    {key: 'u'}, {key: 'v'}, {key: 'w'}, {key: 'x'}, {key: 'y'},
    {key: 'z'},];

// Step 3: Create Stylesheet
const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    }
});

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
};

const MyApp = () => {
    return (
        <View style={{marginTop: 30, marginBottom: 20}}>
            <FlatList
                data={datasource}
                renderItem={renderItem}
            />
        </View>
    );
};

export default MyApp;
