import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const SigninPage = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState('individual');

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFFFFF', '#F8D7A6']} // White to soft orange gradient
        style={styles.gradient}
      >
        <Image source={require('../Images/illustration1.png')} style={styles.illustration} />
      </LinearGradient>

      <View style={styles.padstyle}>
        <TouchableOpacity
          style={[styles.optionCard, selectedOption === 'individual' && styles.activeCard]}
          onPress={() => {
            setSelectedOption('individual');
            navigation.navigate('registeryour');
          }}
        >
          <Image source={require('../Images/individual.png')} style={styles.icon} />
          <View>
            <Text style={styles.optionTitle}>Join as Individual</Text>
            <Text style={styles.optionSubtitle}>Buy Now, Pay later</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.optionCard, selectedOption === 'shop' && styles.activeCard]}
          onPress={() => {
            setSelectedOption('shop');
            navigation.navigate('createprofile');
          }}
        >
          <Image source={require('../Images/shop.png')} style={styles.icon} />
          <View>
            <Text style={styles.optionTitle}>Register Your Shop</Text>
            <Text style={styles.optionSubtitle}>Get Loyal Customers</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gradient: {
    width: '100%',
    height: 350, // Adjust height as needed
    borderBottomRightRadius: 150,
    borderBottomLeftRadius: 150,
  },
  padstyle: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30
  },
  illustration: {
    width: 400,
    height: 350,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 40
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    marginBottom: 10,
    marginTop: 20
  },
  activeCard: {
    borderColor: '#000',
    // backgroundColor: '#f0f0f0'
  },
  icon: {
    width: 70,
    height: 70,
    marginRight: 10
  },
  optionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  optionSubtitle: {
    fontSize: 12,
    color: 'gray'
  }
});

export default SigninPage;
