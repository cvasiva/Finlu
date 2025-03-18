import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const HelpDeskScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [expandedIndex, setExpandedIndex] = useState(null);

    const faqData = [
        { id: '1', question: 'What is Viral Pitch?', answer: 'Viral Pitch is a platform to connect influencers and brands.' },
        { id: '2', question: 'How to apply for a campaign?', answer: 'Go to campaigns, choose one, and click apply.' },
        { id: '3', question: 'How to know status of a campaign?', answer: 'Check your applied campaigns section for updates.' },
        { id: '4', question: 'How to know status of a campaign?', answer: 'Check your applied campaigns section for updates.' },
        { id: '5', question: 'How to apply for a campaign?', answer: 'Go to campaigns, choose one, and click apply.' },
        { id: '6', question: 'How to know status of a campaign?', answer: 'Check your applied campaigns section for updates.' },
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const renderItem = ({ item, index }) => (
        <TouchableOpacity style={styles.faqItem} onPress={() => toggleExpand(index)}>
            <Text style={styles.faqQuestion}>{item.question}</Text>
            {/* <Ionicons name={expandedIndex === index ? 'remove' : 'add'} size={20} color="black" /> */}
            {expandedIndex === index && <Text style={styles.faqAnswer}>{item.answer}</Text>}
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Header with settings icon */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Help Desk</Text>
                {/* <Ionicons name="settings-outline" size={24} color="black" /> */}
            </View>

            {/* Help description */}
            <Text style={styles.title}>We’re here to help you with anything and everything on ViralPitch</Text>
            <Text style={styles.subtitle}>
                At Viral Pitch we expect at a day’s start is you, better and happier than yesterday.
                We have got you covered, share your concern or check our frequently asked questions listed below.
            </Text>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                {/* <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} /> */}
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search Help"
                    placeholderTextColor="#999"
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>

            {/* FAQ Section */}
            <Text style={styles.faqTitle}>FAQ</Text>
            <FlatList
                data={faqData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                style={styles.faqList}
            />

            {/* Help button */}
            <Text style={styles.helpText}>Still stuck? Help us a mail away</Text>
            <TouchableOpacity style={styles.helpButton}>
                <Text style={styles.helpButtonText}>Send a message</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#555',
        marginBottom: 20,
        lineHeight: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        marginBottom: 20,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        color: '#333',
    },
    faqTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    faqList: {
        marginBottom: 20,
    },
    faqItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 1 },
        elevation: 1,
    },
    faqQuestion: {
        fontSize: 14,
        fontWeight: '500',
        flex: 1,
    },
    faqAnswer: {
        fontSize: 12,
        color: '#666',
        marginTop: 10,
        flex: 1,
    },
    helpText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    helpButton: {
        backgroundColor: '#0C5F41',
        paddingVertical: 12,
        borderRadius: 30,
        alignItems: 'center',
    },
    helpButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
});

export default HelpDeskScreen;
