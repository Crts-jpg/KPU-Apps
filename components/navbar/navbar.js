import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';  // Pastikan sudah menginstall
import { useRoute } from '@react-navigation/native';

const Navbar = ({ navigation }) => {
    const route = useRoute(); // Mendapatkan route saat ini

    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons
                    name="home-outline"
                    size={25}
                    color={route.name === 'Home' ? '#000' : 'gray'} // Gelap jika di Home
                />
                <Text style={[styles.text, route.name === 'Home' && styles.activeText]}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Hasil')}>
                <Ionicons
                    name="bar-chart-outline"
                    size={25}
                    color={route.name === 'Hasil' ? '#000' : 'gray'} // Gelap jika di Hasil
                />
                <Text style={[styles.text, route.name === 'Hasil' && styles.activeText]}>Hasil</Text>
            </TouchableOpacity>

            <View style={styles.favoriteButtonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Favorit')} style={styles.favoriteButton}>
                    <Ionicons name="heart-outline" size={30} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Notifikasi')}>
                <Ionicons
                    name="notifications-outline"
                    size={25}
                    color={route.name === 'Notifikasi' ? '#000' : 'gray'} // Gelap jika di Notifikasi
                />
                <Text style={[styles.text, route.name === 'Notifikasi' && styles.activeText]}>Notifikasi</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Informasi')}>
                <Ionicons
                    name="information-circle-outline"
                    size={25}
                    color={route.name === 'Informasi' ? '#000' : 'gray'} // Gelap jika di Informasi
                />
                <Text style={[styles.text, route.name === 'Informasi' && styles.activeText]}>Informasi</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
        borderTopColor: '#ddd',
        borderTopWidth: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    text: {
        fontSize: 12,
        color: 'gray',
        textAlign: 'center',
    },
    activeText: {
        color: '#000', // Warna gelap untuk teks yang aktif
    },
    favoriteButtonContainer: {
        position: 'relative',
        top: -20,
    },
    favoriteButton: {
        backgroundColor: '#D32F2F',
        borderRadius: 35,
        padding: 15,
    },
});

export default Navbar;
