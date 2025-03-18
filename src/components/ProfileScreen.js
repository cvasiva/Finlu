import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = () => setIsEnabled((prev) => !prev);
  const handlechange = () => {
    navigation.navigate('profiledetailsscreen')
  }

  const handlefeedback = () => {
    navigation.navigate('feedbackscreen')
  }

  const handleHelp = () => {
    navigation.navigate('helpdeskscreen')
  }

  const handleTerms = () => {
    navigation.navigate('termsconditionsscreen')
  }

  return (
    <View style={styles.container}>
      {/* Header with Linear Gradient */}
      <LinearGradient colors={['#26B474', '#150D1E']} style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Lorem Ipsum</Text>
          <Text style={styles.userPhone}>+91 735478363</Text>
        </View>
        <TouchableOpacity>
          <Icon name="pencil-outline" size={20} color="white" />
        </TouchableOpacity>
      </LinearGradient>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        {renderMenuItem('person-outline', 'Profile', handlechange)}
        {renderMenuItemWithSwitch('notifications-outline', 'Notifications', isEnabled, toggleSwitch)}
        {renderMenuItem('chatbubbles-outline', 'Give Feedback', handlefeedback)}
        {renderMenuItem('help-circle-outline', 'Help',handleHelp)}
        {renderMenuItem('document-text-outline', 'Terms & Condition',handleTerms)}
        {renderMenuItem('shield-checkmark-outline', 'Privacy Policy')}
        {renderMenuItem('log-out-outline', 'Logout')}
      </View>
    </View>
  );
};

// Function to render a menu item
const renderMenuItem = (iconName, title, handlechange) => (
  <TouchableOpacity style={styles.menuItem} onPress={() => handlechange()}>
    <Icon name={iconName} size={30} color="#5F8D4E" />
    <Text style={styles.menuText}>{title}</Text>
    <Icon name="chevron-forward-outline" size={25} color="#A0A0A0" />
  </TouchableOpacity>
);

// Function to render a menu item with a switch
const renderMenuItemWithSwitch = (iconName, title, isEnabled, toggleSwitch) => (
  <View style={styles.menuItem}>
    <Icon name={iconName} size={30} color="#5F8D4E" />
    <Text style={styles.menuText}>{title}</Text>
    <Switch
      trackColor={{ false: '#767577', true: '#5F8D4E' }}
      thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  userPhone: {
    fontSize: 14,
    color: 'white',
  },
  menuContainer: {
    marginTop: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E0E0E0',
  },
  menuText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold'
  },
});

export default ProfileScreen;
