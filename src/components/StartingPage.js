/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const StartingPage = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#800B31', '#150D1E']}
      start={{ x: 0.55, y: 0 }}
      end={{ x: 0.55, y: 0.55 }}
      style={styles.container}>
      <View style={styles.hightcard}>
        <Image
          source={require('../Images/applogocard.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.wdthmade}>
        <Image
          source={require('../Images/finlulogo.png')}
          style={styles.finlulogo}
        />
        <Text style={styles.Credit}>
          Credit to instant, payments made efficient
        </Text>
      </View>
      <View style={styles.flxskip}>
        <View>
          <View style={styles.containerflx}>
            <View style={styles.dottedIcon1}>
              <Icon
                name="circle"
                size={10}
                color="#fff"
                style={styles.iconwidth}
              />
            </View>
            <View style={styles.dottedIcon}>
              <Icon name="circle" size={10} color="#999EA1" />
            </View>
            <View style={styles.dottedIcon}>
              <Icon name="circle" size={10} color="#999EA1" />
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.doted1}
            onPress={() => navigation.navigate('loginPage')}
          >
            <Text style={styles.doted}>START</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  finlulogo: {
    width: '50%',
    height: 100,
    top: -250,
  },
  dottedIcon: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dottedIcon1: {
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconwidth: {
    width: 22,
  },
  containerflx: {
    display: 'flex',
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: -220,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  flxskip: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: '90%',
  },
  wdthmade: {
    padding: 20,
  },
  Payments: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'manrope',
    lineHeight: 38,
    color: '#DBDBDB',
    width: '70%',
    position: 'absolute',
    top: -250,
    padding: 20,
  },
  Credit: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'manrope',
    lineHeight: 25,
    color: '#C0C0C0',
    width: '70%',
    position: 'absolute',
    top: -160,
    padding: 20,
  },
  doted: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Raleway',
    lineHeight: 18,
    color: '#fff',
  },
  doted1: {
    position: 'relative',
    top: -220,
  },
});

export default StartingPage;
