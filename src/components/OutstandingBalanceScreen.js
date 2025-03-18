/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const OutstandingBalanceScreen = () => {
  const transactions = [
    {
      id: '1',
      amount: '₹190',
      description: '7 Carbon filters, 12 Solnot valve',
      status: 'In Credit',
      time: '03:22 PM',
      images: [
        { uri: 'https://via.placeholder.com/100' },
        { uri: 'https://via.placeholder.com/100' },
      ],
    },
    {
      id: '2',
      amount: '₹190',
      description: '7 Carbon filters, 12 Solnot valve',
      status: 'In Credit',
      time: '03:22 PM',
      images: [
        { uri: 'https://via.placeholder.com/100' },
        { uri: 'https://via.placeholder.com/100' },
      ],
    },
  ];

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hey there!', time: new Date().toLocaleTimeString(), isUser: false, sent: true },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        text: message,
        time: new Date().toLocaleTimeString(),
        isUser: true,
        sent: false,
      };
      setMessages([...messages, newMessage]);
      setMessage(''); // Clear input field after sending

      // Simulate message sending by updating sent status
      setTimeout(() => {
        const updatedMessages = [...messages];
        updatedMessages[updatedMessages.length - 1].sent = true;
        setMessages(updatedMessages);
      }, 1000); // Simulate delay in message sent status (1 second)
    }
  };

  return (
    <LinearGradient colors={['#F2F2F2', '#F2F2F2']} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <View style={styles.businessInfo}>
          {/* <Image
            source={require('../Images/Ellips.png')}
            style={styles.avatar}
          /> */}
          <Text style={styles.businessName}>Business Name</Text>
          <Icon name="check-circle" size={16} color="#fff" />
        </View>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={styles.bgout}>
              <View style={styles.dateContainer}>
                <Text style={styles.dateText}>Jan 09</Text>
              </View>

              {transactions.map((transaction) => (
                <View key={transaction.id} style={styles.transactionCard}>
                  <Text style={styles.transactionAmount}>
                    {transaction.amount}
                  </Text>
                  <Text style={styles.transactionDescription}>
                    For • {transaction.description}
                  </Text>
                  <View style={styles.transactionFooter}>
                    <Text style={styles.transactionStatus}>
                      <Icon name="check-circle" size={14} color="green" />{' '}
                      {transaction.status}
                    </Text>
                    <Text style={styles.transactionTime}>
                      {transaction.time}
                    </Text>
                    <TouchableOpacity>
                      <Icon name="chevron-right" size={16} color="black" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.transactionImages}>
                    {transaction.images.map((image, index) => (
                      <Image
                        key={index}
                        source={image}
                        style={styles.transactionImage}
                      />
                    ))}
                  </View>
                </View>
              ))}

              <View style={styles.dateContainer}>
                <Text style={styles.dateText}>Today</Text>
              </View>

              {messages.map((msg, index) => (
                <View
                  key={index}
                  style={[
                    styles.chatMessage,
                    msg.isUser ? styles.chatMessageRight : styles.chatMessageLeft,
                  ]}
                >
                  <Text style={styles.messageText}>{msg.text}</Text>
                  <View style={styles.messageFooter}>
                    <Text style={styles.messageTime}>{msg.time}</Text>
                    {msg.sent && msg.isUser && (
                      <Icons
                        name="check-all"
                        size={16}
                        color="#4caf50"
                        style={styles.icon}
                      />
                    )}
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>

        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.requestButton}>
            <Text style={styles.requestText}>Request</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Type your message"
            placeholderTextColor="#999"
            value={message}
            onChangeText={(text) => setMessage(text)}
            returnKeyType="send"
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity onPress={sendMessage}>
            <Icon name="send" size={20} color="#004E27" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#004E27',
  },
  bgout: {
    backgroundColor: '#F2F2F2',
  },
  businessInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  businessName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  dateContainer: { alignItems: 'center', marginVertical: 10 },
  dateText: { color: '#777', fontSize: 14 },
  transactionCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    elevation: 2,
    width: '70%',
  },
  transactionAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  transactionDescription: { color: '#555', fontSize: 14, marginVertical: 5 },
  transactionFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  transactionStatus: { color: 'green', fontSize: 14 },
  transactionTime: { color: '#555', fontSize: 12 },
  transactionImages: { flexDirection: 'row', marginTop: 10 },
  transactionImage: { width: 50, height: 50, marginRight: 10, borderRadius: 5 },
  chatMessage: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    padding: 5,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 10,
    width: '60%',
  },
  chatMessageRight: {
    alignSelf: 'flex-end',
    backgroundColor: '#004E27',
    color: '#fff',
  },
  chatMessageLeft: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f1f1',
  },
  messageText: { fontSize: 16, color: '#000' },
  messageTime: { fontSize: 12, color: '#777' },
  messageFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 5,
  },
  icon: { marginLeft: 5 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  requestButton: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  requestText: { color: '#fff', fontSize: 14 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    height: 40,
  },
});

export default OutstandingBalanceScreen;
