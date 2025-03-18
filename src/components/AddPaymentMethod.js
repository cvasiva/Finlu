import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Switch,
    StyleSheet,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'; // Importing useNavigation

const AddPaymentMethod = () => {
    const navigation = useNavigation(); // Initialize navigation
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [saveCard, setSaveCard] = useState(true);
    const [document1, setDocument1] = useState(true);
    const [document2, setDocument2] = useState(false);

    const handleDocument1 = () => {
        setDocument1(true);
        setDocument2(false);
    };
    const handleDocument2 = () => {
        setDocument1(false);
        setDocument2(true);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                {/* Back Button */}
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Add New Payment Method</Text>
            </View>

            {/* Tabs */}
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={document1 ? styles.activeTab : styles.tab}
                    onPress={handleDocument1}>
                    <Text style={document1 ? styles.tabTextActive : styles.tabText}>
                        New Card
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={document2 ? styles.activeTab : styles.tab}
                    onPress={handleDocument2}>
                    <Text style={document2 ? styles.tabTextActive : styles.tabText}>
                        New UPI
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Card Input Form */}
            {document1 && (
                <>
                    <View style={styles.cardForm}>
                        <Text style={styles.formTitle}>Add new card</Text>
                        <Text style={styles.formSubtitle}>
                            Streamline your process by adding a new card for future
                            transactions. Your card information is secured with advanced
                            encryption technology.
                        </Text>

                        {/* Card Number */}
                        <Text style={styles.inputLabel}>Card Number</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="0000 0000 0000 0000"
                                keyboardType="numeric"
                                value={cardNumber}
                                onChangeText={setCardNumber}
                            />
                            <Icons name="credit-card" size={20} color="#888" />
                        </View>

                        {/* Expiry Date & CVV */}
                        <View style={styles.row}>
                            <View style={styles.halfInput}>
                                <Text style={styles.inputLabel}>Expiry Date</Text>
                                <TextInput
                                    style={styles.input1}
                                    placeholder="MM/YY"
                                    keyboardType="numeric"
                                    value={expiryDate}
                                    onChangeText={setExpiryDate}
                                />
                            </View>
                            <View style={styles.halfInput}>
                                <Text style={styles.inputLabel}>CVV</Text>
                                <TextInput
                                    style={styles.input1}
                                    placeholder="•••"
                                    keyboardType="numeric"
                                    secureTextEntry
                                    value={cvv}
                                    onChangeText={setCvv}
                                />
                            </View>
                        </View>

                        {/* Cardholder Name */}
                        <Text style={styles.inputLabel}>Cardholder's Name</Text>
                        <TextInput
                            style={styles.input1}
                            placeholder="Enter cardholder's full name"
                            value={cardholderName}
                            onChangeText={setCardholderName}
                        />

                        {/* Save Card Toggle */}
                        <View style={styles.switchContainer}>
                            <Text style={styles.inputLabel}>Save my card</Text>
                            <Switch value={saveCard} onValueChange={setSaveCard} />
                        </View>

                        {/* Add Card Button */}
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addButtonText}>Add Card</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
            {document2 && (
                <>
                    <View style={styles.cardForm}>
                        <Text style={styles.formTitle}>Add new card</Text>
                        <Text style={styles.formSubtitle}>
                            Streamline your process by adding a new card for future
                            transactions. Your card information is secured with advanced
                            encryption technology.
                        </Text>

                        {/* Card Number */}
                        

                        {/* Expiry Date & CVV */}
                        {/* Cardholder Name */}
                        <Text style={styles.inputLabel}>UPI ID or Number</Text>
                        <TextInput
                            style={styles.input1}
                            placeholder="Enter UPI ID or Number"
                            value={cardholderName}
                            onChangeText={setCardholderName}
                        />

                        {/* Save Card Toggle */}
                        <View style={styles.switchContainer}>
                            <Text style={styles.inputLabel}>Save my ID</Text>
                            <Switch value={saveCard} onValueChange={setSaveCard} />
                        </View>

                        {/* Add Card Button */}
                        <TouchableOpacity style={styles.addButton}>
                            <Text style={styles.addButtonText}>Add ID</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F0F0F0',
        paddingHorizontal: 20,
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
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 10,
        marginBottom: 15,
        padding: 5,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#205A47',
    },
    activeTab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#004d40',
    },
    tabText: {
        color: '#555',
    },
    tabTextActive: {
        color: 'white',
        fontWeight: 'bold',
    },
    cardForm: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    formTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    formSubtitle: {
        color: '#666',
        marginVertical: 5,
    },
    inputLabel: {
        marginTop: 15,
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 5,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 5,
    },
    input1: {
        flex: 1,
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginTop: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInput: {
        width: '48%',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    addButton: {
        backgroundColor: '#004d40',
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default AddPaymentMethod;
