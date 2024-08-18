import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Navbar from '../navbar/navbar';
import VoteList from './voteList';

const HomePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.electionTitle}>Pemilu 2024</Text>
                    <Text style={styles.electionSubtitle}>Putaran Pertama</Text>
                </View>
                <Text style={styles.dateText}>20/02/2024</Text>
            </View>

            <View style={styles.resultsContainer}>
                <Text style={styles.positionTitle}>PRESIDEN</Text>
                <Text style={styles.resultUpdate}>97% TPS Terhitung{"\n"}Diperbarui pada 12/08/2024 18:59:20</Text>

                <View style={styles.candidatesContainer}>
                    <View style={styles.candidateCard}>
                        <Image source={require('../../assets/candidat.png')} style={styles.candidateImage} />
                        <Text style={styles.candidateName}>Jett</Text>
                        <Text style={styles.candidateVotes}>50,00%</Text>
                        <Text style={styles.candidateParty}>PDT - 13</Text>
                    </View>
                    <View style={styles.candidateCard}>
                        <Image source={require('../../assets/candidat.png')} style={styles.candidateImage} />
                        <Text style={styles.candidateName}>Clove</Text>
                        <Text style={styles.candidateVotes}>25,14%</Text>
                        <Text style={styles.candidateParty}>PDT - 45</Text>
                    </View>
                    <View style={styles.candidateCard}>
                        <Image source={require('../../assets/candidat.png')} style={styles.candidateImage} />
                        <Text style={styles.candidateName}>Sage</Text>
                        <Text style={styles.candidateVotes}>12,25%</Text>
                        <Text style={styles.candidateParty}>PDT - 11</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.completeListButton} onPress={() => navigation.navigate('Hasil')}>
                    <Text style={styles.completeListButtonText}>Lihat daftar lengkap</Text>
                </TouchableOpacity>

                {/* Move VoteList here to place it below the candidate images */}
                <VoteList />
            </View>

            <Navbar navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
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
    resultsContainer: {
        padding: 20,
        flex: 1,
    },
    positionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#D32F2F',
        marginBottom: 10,
    },
    resultUpdate: {
        color: '#777',
        fontSize: 14,
        marginBottom: 20,
    },
    candidatesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    candidateCard: {
        alignItems: 'center',
        width: '30%',
    },
    candidateImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 10,
    },
    candidateName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
        textAlign: 'center',
    },
    candidateVotes: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#D32F2F',
        textAlign: 'center',
    },
    candidateParty: {
        fontSize: 14,
        color: '#777',
        textAlign: 'center',
    },
    completeListButton: {
        backgroundColor: '#FFA726',
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20,
    },
    completeListButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    navigationContainer: {
        borderTopWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
});

export default HomePage;
