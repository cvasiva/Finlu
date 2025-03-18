import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TransactionReport = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(20);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [timer]);

    const handleOtpChange = (index, value) => {
        if (isNaN(value)) return;
        let otpArray = [...otp];
        otpArray[index] = value;
        setOtp(otpArray);

        // Move to next input
        if (value && index < otp.length - 1) {
            inputs[index + 1].focus();
        }
    };

    let inputs = [];
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
                    <Text style={[styles.stepText]}>Basic Details</Text>
                </View>
                <View style={styles.dashedLine} />
                <View style={[styles.step,]}>
                    <View style={styles.completedStep}>
                        <Icon name="check" size={14} color="white" />
                    </View>
                    <Text style={[styles.stepText]}>Bank Details</Text>
                </View>
                <View style={styles.dashedLine} />
                <View style={[styles.step,]}>
                    <View style={styles.activeStep}>
                        <Icon name="file-invoice-dollar" size={20} color="white" />
                    </View>
                    <Text style={[styles.stepText]}>Transaction Report</Text>
                </View>
            </View>

            {/* Transaction Report Form */}
            <Text style={styles.sectionTitle}>Send my transaction reports to</Text>

            <Text style={styles.label}>Email ID</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter email ID"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <Text style={styles.orText}>(Or)</Text>

            <Text style={styles.label}>What’s App No.</Text>
            <TextInput
                style={styles.input}
                placeholder="+91"
                value={whatsapp}
                onChangeText={setWhatsapp}
                keyboardType="phone-pad"
            />

            {/* Send OTP Button */}
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>Send OTP</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <View style={styles.otpContainer}>
                            <Text style={styles.title1}>Please check your mobile for Code</Text>
                            <Text style={styles.subtitle1}>We’ve sent a code to mobile number</Text>
                            <Text style={styles.phoneNumber}>+91-6374086731</Text>

                            {/* OTP Input Fields */}
                            <View style={styles.otpInputContainer}>
                                {otp.map((digit, index) => (
                                    <TextInput
                                        key={index}
                                        style={[styles.otpInput, digit ? styles.filledInput : null]}
                                        keyboardType="numeric"
                                        maxLength={1}
                                        value={digit}
                                        onChangeText={(value) => handleOtpChange(index, value)}
                                        ref={(ref) => (inputs[index] = ref)}
                                    />
                                ))}
                            </View>

                            {/* Verify OTP Button */}
                            <TouchableOpacity style={styles.verifyButton} onPress={() => setModalVisible1(true)}>
                                <Text style={styles.verifyButtonText}>Verify OTP</Text>
                            </TouchableOpacity>

                            {/* Resend Code */}
                            <View style={styles.resendContainer}>
                                <TouchableOpacity disabled={timer > 0}>
                                    <Text style={[styles.resendText, timer > 0 ? styles.disabledResend : null]}>Send code again</Text>
                                </TouchableOpacity>
                                <Text style={styles.timerText}>{timer > 0 ? `00:${timer < 10 ? `0${timer}` : timer}` : ''}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                transparent={true}
                visible={modalVisible1}
                onRequestClose={() => setModalVisible1(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <View style={styles.successContainer}>
                            {/* Success Check Icon */}
                            <View style={styles.innerCircle}>
                                {/* Inner Circle (Green) */}
                                <View style={styles.outerCircle}>
                                    {/* Checkmark Icon */}
                                    <View style={styles.iconWrapper}>
                                        <Icon name="check" size={40} color="#209B5E" />
                                    </View>
                                </View>
                            </View>


                            {/* Success Message */}
                            <Text style={styles.title1}>Verification Success!</Text>
                            <Text style={styles.subtitle1}>
                                Your phone number has been verified, and your account is successfully created!
                            </Text>

                            {/* Get Started Button */}
                            <TouchableOpacity style={styles.verifyButton} onPress={() => navigation.navigate('Main')}>
                                <Text style={styles.verifyButtonText}>Get Started</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 5 },
    subtitle: { fontSize: 14, color: 'gray', marginBottom: 15 },
    title1: { fontSize: 22, fontWeight: 'bold', marginBottom: 5, textAlign: 'center' },
    subtitle1: { fontSize: 14, color: 'gray', marginBottom: 15, textAlign: 'center' },
    separator: { height: 1, backgroundColor: 'black', marginBottom: 20 },

    /* Step Progress */
    stepContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 },
    step: { alignItems: 'center', padding: 10 },
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
    activeStep: {
        backgroundColor: '#b3263a',
        borderRadius: 50,
        justifyContent: "center",
        alignItems: 'center',
        textAlign: "center",
        height: 50,
        width: 50,
        borderColor: "#FFB0CE",
        borderWidth: 3
    },
    stepText: { fontSize: 12, color: 'gray', marginTop: 5 },
    dashedLine: { width: 30, height: 2, backgroundColor: '#C4A484', marginHorizontal: 5 },

    /* Form Styles */
    sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10, marginTop: 10 },
    label: { fontSize: 14, fontWeight: 'bold', marginBottom: 5, marginTop: 20 },
    input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 5, padding: 10, fontSize: 14, height: 50 },
    orText: { textAlign: 'center', marginVertical: 10, fontSize: 12, color: 'gray' },

    /* Send OTP Button */
    button: { backgroundColor: '#b3263a', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 10 },
    buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },

    /* Modal Styles */
    modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
    modalContainer: { width: '80%', backgroundColor: 'white', borderRadius: 20, alignItems: 'center', overflow: 'hidden' },

    /* OTP Input */
    otpContainer: { backgroundColor: '#fff', width: '90%', padding: 20, borderRadius: 15, alignItems: 'center' },
    phoneNumber: { fontSize: 16, fontWeight: 'bold', marginTop: 5, color: '#000' },
    otpInputContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        fontSize: 22,
        textAlign: 'center',
        color: '#000'
    },

    /* Verify OTP Button */
    verifyButton: { backgroundColor: '#C62828', paddingVertical: 12, width: '100%', borderRadius: 10, alignItems: 'center', marginTop: 20 },
    verifyButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

    /* Resend Code */
    resendContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
    resendText: { fontSize: 14, color: '#000', fontWeight: '500' },
    disabledResend: { color: '#888' },
    timerText: { fontSize: 14, color: '#888', marginLeft: 10 },

    /* Success Modal */
    successContainer: { backgroundColor: '#fff', width: '90%', padding: 20, borderRadius: 15, alignItems: 'center' },
    outerCircle: { width: 60, height: 60, backgroundColor: '#F8FBEF', borderRadius: 50, alignItems: 'center', justifyContent: 'center' },
    innerCircle: { width: 80, height: 80, backgroundColor: '#2E7D32', borderRadius: 50, alignItems: 'center', justifyContent: 'center' },
    iconWrapper: { alignItems: 'center', justifyContent: 'center' },
});

export default TransactionReport;
