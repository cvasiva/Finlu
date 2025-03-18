import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CreateProfile = ({navigation}) => {
    const [fullName, setFullName] = useState('');
    const [fullName2, setFullName2] = useState('');
    const [gstin, setGstin] = useState('');
    const [shopAddress, setShopAddress] = useState('');
    const [location, setLocation] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register Your Shop</Text>
            <Text style={styles.subtitle}>Register your shop with following details</Text>

            <View style={styles.separator} />

            {/* Step Progress */}
            <View style={styles.stepContainer}>
                <View style={[styles.step,]}>
                    <View style={styles.activeStep}><Icon name="user" size={20} color="white" /></View>
                    <Text style={[styles.stepText,]}>Basic Details</Text>
                </View>
                <View style={styles.dashedLine} />
                <View style={styles.step}>
                    <View style={styles.activeStep1}><Icon name="university" size={20} color="#C4A484" /></View>
                    <Text style={styles.stepText}>Bank Details</Text>
                </View>
                <View style={styles.dashedLine} />
                <View style={styles.step}>
                    <View style={styles.activeStep1}><Icon name="file-invoice-dollar" size={20} color="#C4A484" /></View>
                    <Text style={styles.stepText}>Transaction Report</Text>
                </View>
            </View>

            {/* Form Fields */}
            <Text style={styles.label}>Full Name</Text>
            <TextInput
                style={[styles.input, fullName ? styles.filledInput : styles.errorInput]}
                placeholder="Enter your full name"
                value={fullName}
                onChangeText={setFullName}
            />

            <Text style={styles.label}>Full Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                value={fullName2}
                onChangeText={setFullName2}
            />

            <Text style={styles.label}>GSTIN (Optional)</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter GSTIN"
                value={gstin}
                onChangeText={setGstin}
            />

            <Text style={styles.label}>Shop Address (Optional)</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter shop address"
                value={shopAddress}
                onChangeText={setShopAddress}
            />

            <Text style={styles.label}>Location (Optional)</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter location"
                value={location}
                onChangeText={setLocation}
            />

            {/* Submit Button */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('bankdetails')}>
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
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 20
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
    errorInput: {
        borderColor: 'red',
        backgroundColor: '#fde8e8',
    },
    filledInput: {
        borderColor: '#ccc',
    },

    /* Submit Button */
    button: {
        backgroundColor: '#b3263a',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default CreateProfile;
