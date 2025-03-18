import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileDetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profile Details</Text>
                <View style={{ width: 24 }} />
            </View>

            {/* Profile Information */}
            <View style={styles.card}>
                <InfoRow label="Full name" value="Ziad" />
                <InfoRow label="Mobile Number" value="+91 93553384645" color="#B15C1E" />
                <InfoRow label="Email ID" value="ziad@gmail.com" />
                <InfoRow
                    label="Transaction updates to"
                    value="93453374343"
                    color="#B15C1E"
                    icon="logo-whatsapp"
                />
            </View>

            {/* Saved Payment Methods */}
            <Text style={styles.sectionTitle}>Saved Payment methods</Text>

            <View style={styles.card}>
                <InfoRow label="Saved Card" value="************6354" />
                <InfoRow label="Saved UPI ID" value="ziad@hdfc-okicici" />
            </View>

            {/* Add New Payment Button */}
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('addpaymentmethod')}>
                <Text style={styles.addButtonText}>Add New Payment +</Text>
            </TouchableOpacity>
        </View>
    );
};

// Reusable Row Component
const InfoRow = ({ label, value, color, icon }) => (
    <View style={styles.infoRow}>
        <Text style={[styles.label, color ? { color } : {}]}>{label}</Text>
        <View style={styles.valueRow}>
            {icon && <Icon name={icon} size={16} color="#128C7E" style={{ marginRight: 5 }} />}
            <Text style={styles.value}>{value}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    card: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    infoRow: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        paddingBottom: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#6B6B6B',
    },
    valueRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    value: {
        fontSize: 16,
        color: '#000',
        fontWeight: '500',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    addButton: {
        backgroundColor: '#ECECEC',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    addButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#6B6B6B',
    },
});

export default ProfileDetailsScreen;
