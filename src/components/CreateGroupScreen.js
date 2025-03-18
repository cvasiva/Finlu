import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CreateGroupScreen = ({ navigation }) => {
  const [groupName, setGroupName] = useState('');
  const [supplier, setSupplier] = useState('');
  const [member, setMember] = useState('');

  const membersList = [
    { id: '1', name: 'William Elly', phone: '+91-6374085682', role: 'Admin' },
    { id: '2', name: 'William Elly', phone: '+91-6374085682', role: 'Member' },
    { id: '3', name: 'William Elly', phone: '+91-6374085682', role: 'Member' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={22} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create Group</Text>
      </View>

      {/* Group Name Input */}
      <Text style={styles.label}>Group name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter group name"
        value={groupName}
        onChangeText={setGroupName}
      />

      {/* Add Supplier Input */}
      <Text style={styles.label}>Add Supplier</Text>
      <TextInput
        style={styles.input}
        placeholder="+91"
        keyboardType="phone-pad"
        value={supplier}
        onChangeText={setSupplier}
      />

      {/* Add Members Input */}
      <Text style={styles.label}>Add members</Text>
      <TextInput
        style={styles.input}
        placeholder="+91"
        keyboardType="phone-pad"
        value={member}
        onChangeText={setMember}
      />

      {/* Import Contacts Button */}
      <Text style={styles.orText}>(Or)</Text>
      <TouchableOpacity style={styles.importButton}>
        <Icon name="address-book" size={18} color="black" style={styles.importIcon} />
        <Text style={styles.importText}>Import Contact</Text>
      </TouchableOpacity>

      {/* Members List */}
      <Text style={styles.sectionTitle}>All members</Text>
      <FlatList
        data={membersList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.memberItem}>
            <Image source={require('../Images/Avatar.png')} style={styles.memberImage} />
            <View style={styles.memberInfo}>
              <Text style={styles.memberName}>{item.name}</Text>
              <Text style={styles.memberPhone}>{item.phone}</Text>
            </View>
            <Text style={styles.memberRole}>{item.role}</Text>
          </View>
        )}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={22} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNav]}>
          <Icon name="users" size={22} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="qrcode" size={22} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="file-alt" size={22} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="user" size={22} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F8F8F8',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
    color: 'gray',
  },
  importButton: {
    flexDirection: 'row',
    backgroundColor: '#EEE',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  importIcon: {
    marginRight: 8,
  },
  importText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  memberItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  memberImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  memberPhone: {
    color: 'gray',
  },
  memberRole: {
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    marginTop: 20,
  },
  navItem: {
    padding: 10,
  },
  activeNav: {
    borderBottomWidth: 2,
    borderBottomColor: 'green',
  },
});

export default CreateGroupScreen;
