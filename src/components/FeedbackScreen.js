import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const FeedbackScreen = ({ navigation }) => {
    const [message, setMessage] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* Back Button */}
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Provide Feedback</Text>
            </View>

            {/* Input Box */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Message</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Type your feedback here..."
                    placeholderTextColor="#aaa"
                    value={message}
                    onChangeText={setMessage}
                    multiline
                />
            </View>

            {/* Submit Button */}
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.bottomNavText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.bottomNavText}>Group</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.bottomNavText}>Scanner</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.bottomNavText}>Report</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.bottomNavTextActive}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        padding: 20,
    },
    backButton: {
        marginBottom: 10,
    },
    backText: {
        fontSize: 16,
        color: '#333',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    inputContainer: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#964B00',
        marginBottom: 5,
    },
    input: {
        fontSize: 16,
        color: '#333',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 5,
    },
    submitButton: {
        marginTop: 20,
        backgroundColor: '#0C5F41',
        paddingVertical: 12,
        borderRadius: 6,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
    bottomNav: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'space-around',
        elevation: 5,
    },
    navItem: {
        alignItems: 'center',
    },
    bottomNavText: {
        fontSize: 12,
        fontWeight: '500',
        color: '#999',
    },
    bottomNavTextActive: {
        fontSize: 12,
        fontWeight: '500',
        color: '#0C5F41',
    },
});

export default FeedbackScreen;
