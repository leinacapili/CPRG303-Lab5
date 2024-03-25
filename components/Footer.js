import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text>The IncredibleToDo app is a project for CPRG-303.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        // flex: 1,
        backgroundColor: '#B48291',
        padding: 5,
        alignItems: 'center'
    }
})