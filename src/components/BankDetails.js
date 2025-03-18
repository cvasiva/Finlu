import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const BankDetails = ({ navigation }) => {
    const [upiNumber, setUpiNumber] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [ifscCode, setIfscCode] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register Your Shop</Text>
            <Text style={styles.subtitle}>Register your shop with following details</Text>

            <View style={styles.separator} />

            {/* Step Progress */}
            <View style={styles.stepContainer}>
                <View style={[styles.step,]}>
                    <View style={styles.completedStep}>
                        <Icon name="check" size={14} color="white" />
                    </View>
                    <Text style={[styles.stepText,]}>Basic Details</Text>
                </View>
                <View style={styles.dashedLine} />
                <View style={[styles.step,]}>
                    <View style={styles.activeStep}>
                        <Icon name="university" size={20} color="white" />
                    </View>
                    <Text style={[styles.stepText]}>Bank Details</Text>
                </View>
                <View style={styles.dashedLine} />
                <View style={styles.step}>
                    <View style={styles.activeStep1}>
                        <Icon name="file-invoice-dollar" size={20} color="#C4A484" />
                    </View>
                    <Text style={styles.stepText}>Transaction Report</Text>
                </View>
            </View>

            {/* Receivable Payment Details */}
            <Text style={styles.sectionTitle}>Receivable Payment Details</Text>

            <Text style={styles.label}>UPI Mobile Number</Text>
            {/* <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Google_Pay_Logo.svg' }} style={styles.gpayIcon} /> */}
            <TextInput
                style={styles.input}
                placeholder="Enter UPI number"
                value={upiNumber}
                onChangeText={setUpiNumber}
            />

            <Text style={styles.label}>Bank Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter bank name"
                value={bankName}
                onChangeText={setBankName}
            />

            <Text style={styles.label}>Acc. No.</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter account number"
                value={accountNumber}
                onChangeText={setAccountNumber}
                keyboardType="numeric"
            />

            <Text style={styles.label}>IFSC</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter IFSC code"
                value={ifscCode}
                onChangeText={setIfscCode}
            />

            {/* Submit Button */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('transactionreport')}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 15,
    },
    separator: {
        height: 1,
        backgroundColor: 'black',
        marginBottom: 20,
    },

    /* Step Progress */
    stepContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    step: {
        alignItems: 'center',
        padding: 10,
    },
    completedStep: {
        backgroundColor: '#b3263a',
        padding: 10,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: 'center',
        textAlign: "center",
        height: 50,
        width: 50,
    },
    completedStepText: {
        color: '#b3263a',
        fontWeight: 'bold',
    },
    activeStep: {
        backgroundColor: '#b3263a',
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        textAlign: "center",
        height: 50,
        width: 50,
        borderColor: "#FFB0CE",
        borderWidth: 3
    },
    activeStep1: {
        backgroundColor: '#FDF3DF',
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        textAlign: "center",
        height: 50,
        width: 50
    },
    activeStepText: {
        color: '#b3263a',
        fontWeight: 'bold',
    },
    stepText: {
        fontSize: 12,
        color: 'gray',
        marginTop: 5,
    },
    dashedLine: {
        width: 30,
        height: 2,
        backgroundColor: '#C4A484',
        marginHorizontal: 5,
    },

    /* Form Styles */
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop:20
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    gpayIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        fontSize: 14,
        height: 60
    },

    /* Submit Button */
    button: {
        backgroundColor: '#b3263a',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default BankDetails;
