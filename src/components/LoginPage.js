import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CountryPicker from 'react-native-country-picker-modal';
import LinearGradient from 'react-native-linear-gradient';
const LoginScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('IE'); // Ireland as default
  const [callingCode, setCallingCode] = useState('353');
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
      <LinearGradient
        colors={['#FFFFFF', '#F8D7A6']} // White to soft orange gradient
        style={styles.gradient}
      >
        <Image source={require('../Images/illustration.png')} style={styles.illustration} />
      </LinearGradient>

      <View style={styles.padistyle}>
        <Text style={styles.heading}>Hi There! 👋</Text>
        <Text style={styles.subText}>Please use your phone number to login.</Text>

        <View style={styles.inputContainer}>
          <CountryPicker
            withFlag
            withCallingCode
            withFilter
            countryCode={countryCode}
            onSelect={(country) => {
              setCountryCode(country.cca2);
              setCallingCode(country.callingCode[0]);
            }}
            containerButtonStyle={styles.countryPicker}
          />
          <Text style={styles.callingCode}>+{callingCode}</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>A Product of Finlu</Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.otpContainer}>
              <Text style={styles.title}>Please check your mobile for Code</Text>
              <Text style={styles.subtitle}>We’ve sent a code to mobile number</Text>
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
              <Text style={styles.title}>Verification Success!</Text>
              <Text style={styles.subtitle}>
                Your phone number has been verified, and your account is successfully created!
              </Text>

              {/* Get Started Button */}
              <TouchableOpacity style={styles.verifyButton} onPress={() => navigation.navigate('signinPage')}>
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
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',

  },
  outerCircle: {
    width: 60,
    height: 60,
    backgroundColor: '#F8FBEF',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 80,
    height: 80,
    backgroundColor: '#2E7D32',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successContainer: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  getStartedButton: {
    backgroundColor: '#C62828',
    paddingVertical: 12,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  getStartedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    overflow: 'hidden', // Ensures rounded edges
    // height: 400
  },
  gradient: {
    width: '100%',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  closeButton: {
    backgroundColor: '#0A5F56',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  padistyle: {
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%'
  },
  gradient: {
    width: '100%',
    height: 300, // Adjust height as needed
    borderBottomRightRadius: 150,
    borderBottomLeftRadius: 150,
  },
  illustration: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20
  },
  heading: {
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15
  },
  subText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 60
  },
  countryPicker: {
    marginRight: 10
  },
  callingCode: {
    fontSize: 16,
    marginRight: 10
  },
  input: {
    flex: 1,
    height: 40
  },
  loginButton: {
    backgroundColor: '#C21836',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 250
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  footerText: {
    marginTop: 20,
    fontSize: 12,
    color: 'gray',
    textAlign: 'center'
  },
  otpContainer: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
    textAlign: 'center',
  },
  phoneNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#000',
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    fontSize: 22,
    textAlign: 'center',
    color: '#000',
    marginHorizontal: 5,
  },
  filledInput: {
    borderColor: '#4CAF50',
  },
  verifyButton: {
    backgroundColor: '#C62828',
    paddingVertical: 12,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  resendText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  disabledResend: {
    color: '#888',
  },
  timerText: {
    fontSize: 14,
    color: '#888',
    marginLeft: 10,
  },
});

export default LoginScreen;
