/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Modalize } from 'react-native-modalize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PayableScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Payable');
  const modalizeRef = useRef(null);
  const [activeScreen, setActiveScreen] = useState('payablescreen');
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const payables = [
    {
      id: '1',
      name: 'William Elly',
      phone: '+91-6374085682',
      amount: '-₹450.00',
    },
    { id: '2', name: 'John Doe', phone: '+91-6374085682', amount: '-₹320.00' },
    { id: '3', name: 'Jane Smith', phone: '+91-6374085682', amount: '-₹150.00' },
    { id: '4', name: 'Emily Davis', phone: '+91-6374085682', amount: '-₹600.00' },
    {
      id: '5',
      name: 'Michael Brown',
      phone: '+91-6374085682',
      amount: '-₹800.00',
    },
  ];

  const receivables = [
    { id: '1', name: 'Alice Green', phone: '+91-6374085682', amount: '+₹450.00' },
    { id: '2', name: 'David Lee', phone: '+91-6374085682', amount: '+₹320.00' },
    {
      id: '3',
      name: 'Sophia White',
      phone: '+91-6374085682',
      amount: '+₹150.00',
    },
    {
      id: '4',
      name: 'Olivia Brown',
      phone: '+91-6374085682',
      amount: '+₹600.00',
    },
    {
      id: '5',
      name: 'James Taylor',
      phone: '+91-6374085682',
      amount: '+₹800.00',
    },
  ];

  const handlePress = screen => {
    setActiveScreen(screen);
  };

  const handlePersonClick = (person, type) => {
    if (type === 'Payable') {
      navigation.navigate('businesschatscreen', person)

    } else {
      navigation.navigate('receivablechatscreen', { person });
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false),
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const data = activeTab === 'Payable' ? payables : receivables;
  const totalAmount = data.reduce((sum, item) => {
    const amount = parseFloat(item.amount.replace(/[₹,+,-]/g, ''));
    return activeTab === 'Payable' ? sum - amount : sum + amount;
  }, 0);

  return (
    <LinearGradient
      colors={
        activeTab === 'Payable'
          ? ['#B42647', '#150D1E']
          : ['#26B474', '#150D1E']
      }
      style={styles.gradient}>
      <GestureHandlerRootView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../Images/Ellipse.png')}
            style={styles.image}
          />
          <View>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.userName}>Praveen</Text>
          </View>
          <TouchableOpacity style={styles.notificationIcon}>
            <View>
              <View style={styles.mainCircle}>
                <Icon name="bell" size={20} color="#fff" />
              </View>
              <View style={styles.redDot} />
            </View>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.searchBar}
          placeholder="Search Payee"
          placeholderTextColor="#fff"
        />

        <View style={styles.flxpay}>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'Payable' && styles.activeTab]}
              onPress={() => setActiveTab('Payable')}>
              <Text
                style={
                  activeTab === 'Payable'
                    ? styles.activeTabText
                    : styles.tabText
                }>
                Payable
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'Receivable' && styles.activeTab]}
              onPress={() => setActiveTab('Receivable')}>
              <Text
                style={
                  activeTab === 'Receivable'
                    ? styles.activeTabText
                    : styles.tabText
                }>
                Receivable
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.totalAmountLabel}>Total {activeTab} Amount</Text>
        <Text style={styles.totalAmount}>₹{Math.abs(totalAmount)}</Text>

        <Modalize
          ref={modalizeRef}
          handleStyle={styles.modalHandle}
          modalStyle={[styles.modalStyle, { marginBottom: keyboardVisible ? -200 : 0 }]}
          alwaysOpen={580}>
          <View>
            <Text style={styles.allfont}>All {activeTab}s</Text>
          </View>
          <View>
            {data.map(item => (
              <TouchableOpacity
                onPress={() => handlePersonClick(item, activeTab)}
                key={item.id}>
                <View style={styles.listItem}>
                  <Image
                    source={require('../Images/Avatar.png')}
                    style={styles.avatar}
                  />
                  <View style={styles.listItemText}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.phone}>{item.phone}</Text>
                  </View>
                  <Text
                    style={
                      activeTab === 'Payable'
                        ? styles.amount
                        : styles.amountPositive
                    }>
                    {item.amount}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </Modalize>
      </GestureHandlerRootView>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  gradient: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  homeflx: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: { width: 50, height: 50 },
  welcomeText: { color: '#FFF', fontSize: 16, textAlign: 'center' },
  userName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  notificationIcon: { position: 'relative' },
  mainCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'rgba(220, 219, 219, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  allfont: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#000',
  },
  redDot: {
    position: 'absolute',
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#FF4D4D',
    right: 0,
    borderWidth: 2,
    borderColor: '#fff',
  },
  searchBar: {
    backgroundColor: 'rgba(182, 177, 177, 0.5)',
    margin: 10,
    borderRadius: 8,
    padding: 10,
    color: '#fff',
  },
  flxpay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: 'rgba(220, 219, 219, 0.5)',
    borderRadius: 20,
  },
  tab: { paddingVertical: 10, paddingHorizontal: 20 },
  activeTab: { backgroundColor: '#FFF', borderRadius: 20 },
  tabText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  activeTabText: { color: '#4A003B', fontSize: 16, fontWeight: 'bold' },
  totalAmountLabel: { textAlign: 'center', color: '#FFF', fontSize: 16 },
  totalAmount: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    margin: 20,
  },
  buttonText: { color: '#FFF', fontSize: 16, textAlign: 'center' },
  modalHandle: { backgroundColor: '#e9e9e9', width: 80, marginTop: 20 },
  modalStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  listItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    display: 'flex',
    alignItems: 'center',
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  listItemText: { flex: 1, display: 'flex', flexDirection: 'column', gap: 5 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  phone: { color: '#555' },
  amount: { color: 'red', fontWeight: 'bold', fontSize: 20 },
  amountPositive: {
    color: '#448C47',
    fontWeight: 'bold',
    fontSize: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#FFF',
    position: 'relative',
    bottom: 0,
  },
  navItem: { fontSize: 16, color: '#9B9B9B', fontWeight: 'bold' },
});

export default PayableScreen;
