import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import voteData from '../data/Data';  // Import data dari file terpisah

const VoteList = () => {
    const renderCandidate = ({ item }) => (
        <View style={styles.candidateContainer}>
            <Text style={styles.candidateName}>{item.name}</Text>
            <Text style={styles.candidateVotes}>{item.votes} - {item.percentage}</Text>
        </View>
    );

    const renderRegion = ({ item }) => (
        <View style={styles.regionContainer}>
            <Text style={styles.regionTitle}>{item.wilayah}</Text>
            <FlatList
                data={item.candidates}
                renderItem={renderCandidate}
                keyExtractor={(candidate) => candidate.name}
            />
        </View>
    );

    return (
        <FlatList
            data={voteData}
            renderItem={renderRegion}
            keyExtractor={(region) => region.wilayah}
        />
    );
};

const styles = StyleSheet.create({
    regionContainer: {
        marginBottom: 20,
        padding: 15,  // Increased padding for better spacing
        backgroundColor: '#FFFFFF',  // White background for the region container
        borderRadius: 8,
        borderWidth: 1,  // Added border
        borderColor: '#ddd',  // Light gray border color
        shadowColor: '#000',  // Shadow for depth effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,  // Elevation for Android shadow
        marginTop: 10,
    },
    regionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#D32F2F',  // Red color for region title to match the theme
        marginBottom: 10,
    },
    candidateContainer: {
        marginBottom: 5,
        flexDirection: 'row',  // Arrange candidate name and votes side by side
        justifyContent: 'space-between',
    },
    candidateName: {
        fontSize: 16,
        color: '#333',  // Darker color for better readability
    },
    candidateVotes: {
        fontSize: 14,
        color: '#555',  // Slightly darker color for votes
    },
});

export default VoteList;
