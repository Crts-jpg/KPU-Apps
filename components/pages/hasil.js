import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Modal, Animated } from 'react-native';
import Navbar from '../navbar/navbar';

const voteResults = [
    { id: '1', name: 'Juliana Marrone', region: 'Maros', votes: 30000, percentage: 50, imageUrl: require('../../assets/candidat.png') },
    { id: '2', name: 'Bruno Costa', region: 'Maros', votes: 20000, percentage: 33.33, imageUrl: require('../../assets/candidat.png') },
    { id: '3', name: 'Clóvis Beluzzi', region: 'Maros', votes: 10000, percentage: 16.67, imageUrl: require('../../assets/candidat.png') },
    { id: '4', name: 'Juliana Marrone', region: 'Gowa', votes: 25000, percentage: 41.67, imageUrl: require('../../assets/candidat.png') },
    { id: '5', name: 'Bruno Costa', region: 'Gowa', votes: 20000, percentage: 33.33, imageUrl: require('../../assets/candidat.png') },
    { id: '6', name: 'Clóvis Beluzzi', region: 'Gowa', votes: 15000, percentage: 25, imageUrl: require('../../assets/candidat.png') },
];

const CandidateModal = ({ visible, onClose, candidate }) => {
    const fadeAnim = new Animated.Value(0);

    if (!candidate) return null;

    const startFadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    startFadeIn();

    return (
        <Modal
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <Animated.View style={[styles.modalContent, { opacity: fadeAnim }]}>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>X</Text>
                    </TouchableOpacity>
                    <View style={styles.imageContainer}>
                        <Image source={candidate.imageUrl} style={styles.modalImage} />
                    </View>
                    <Text style={styles.modalCandidateName}>{candidate.name}</Text>
                    <Text style={styles.modalVotes}>{candidate.percentage}% - {candidate.votes.toLocaleString()} VOTES</Text>
                    <Text style={styles.modalVicePresident}>Vice-President: {candidate.vicePresident}</Text>
                    <TouchableOpacity style={styles.favoriteButton}>
                        <Text style={styles.favoriteButtonText}>Favoritar</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </Modal>
    );
};

const HasilScreen = ({ navigation }) => {
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleCandidatePress = (candidate) => {
        setSelectedCandidate(candidate);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedCandidate(null);
    };

    const renderCandidate = ({ item }) => (
        <TouchableOpacity style={styles.candidateContainer} onPress={() => handleCandidatePress(item)}>
            <View style={styles.candidateDetails}>
                <Image source={item.imageUrl} style={styles.candidateImage} />
                <View style={styles.candidateInfo}>
                    <Text style={styles.candidateName}>{item.name}</Text>
                    <Text style={styles.candidateRegion}>{item.region}</Text>
                </View>
            </View>
            <Text style={styles.candidateVotes}>{item.votes.toLocaleString()} VOTES</Text>
            <Text style={styles.candidatePercentage}>{item.percentage}%</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.electionTitle}>Pemilu 2024</Text>
                    <Text style={styles.electionSubtitle}>Hasil Pemilu</Text>
                </View>
                <Text style={styles.dateText}>20/02/2024</Text>
            </View>

            <FlatList
                data={voteResults}
                renderItem={renderCandidate}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />

            <TouchableOpacity style={styles.showAllButton}>
                <Text style={styles.showAllButtonText}>Lihat semua kandidat</Text>
            </TouchableOpacity>

            <Navbar navigation={navigation} />
            
            <CandidateModal
                visible={isModalVisible}
                onClose={closeModal}
                candidate={selectedCandidate}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#D32F2F',
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTextContainer: {
        marginTop: 30,
        flexDirection: 'column',
    },
    electionTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    electionSubtitle: {
        color: '#fff',
        fontSize: 18,
    },
    dateText: {
        color: '#fff',
        fontSize: 16,
    },
    listContainer: {
        paddingHorizontal: 20,
    },
    candidateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    candidateDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    candidateImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    candidateInfo: {
        marginLeft: 10,
    },
    candidateName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    candidateRegion: {
        fontSize: 14,
        color: '#666',
    },
    candidateVotes: {
        fontSize: 14,
        color: '#666',
    },
    candidatePercentage: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#D32F2F',
    },
    showAllButton: {
        backgroundColor: '#FFA726',
        paddingVertical: 12,
        marginHorizontal: 20,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20,
    },
    showAllButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        width: '90%',
    },
    closeButton: {
        alignSelf: 'flex-end',
        padding: 10, // Tambahkan padding untuk memperbesar area klik
    },
    closeButtonText: {
        fontSize: 24, // Perbesar ukuran teks
        fontWeight: 'bold',
        color: '#D32F2F',
    },
    imageContainer: {
        backgroundColor: '#FAFAFA',
        borderRadius: 50,
        padding: 10,
        marginBottom: 10,
    },
    modalImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    modalCandidateName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    modalVotes: {
        fontSize: 18,
        color: '#666',
    },
    modalVicePresident: {
        fontSize: 16,
        color: '#999',
        marginBottom: 10,
    },
    favoriteButton: {
        backgroundColor: '#FFA726',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        marginTop: 10,
    },
    favoriteButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HasilScreen;
