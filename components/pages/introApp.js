import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const OpeningApp = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
        navigation.replace('Login');
        }, 3000);
    }, [navigation]);

    return (
        <View style={styles.container}>
        <Image
            source={require('../../assets/pngegg.png')}
            style={styles.logo}
        />
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 170,
        height: 170,
    },
});

export default OpeningApp;
