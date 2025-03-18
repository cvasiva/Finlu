import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const TermsConditionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Terms & Conditions</Text>
        <View style={{ width: 24 }} /> {/* Placeholder to center title */}
      </View>

      {/* Terms & Conditions Content */}
      <ScrollView style={styles.content}>
        <Text style={styles.clauseTitle}>Clause 1</Text>
        <Text style={styles.clauseText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. 
          Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse 
          aenean leo pharetra in sit semper et. Amet quam placerat sem.
        </Text>

        <Text style={styles.clauseTitle}>Clause 2</Text>
        <Text style={styles.clauseText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. 
          Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse 
          aenean leo pharetra in sit semper et. Amet quam placerat sem.
        </Text>

        <Text style={styles.clauseText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. 
          Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse 
          aenean leo pharetra in sit semper et. Amet quam placerat sem.
        </Text>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 10,
    padding: 20,
    elevation: 2,
  },
  clauseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  clauseText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 15,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-around',
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#999',
  },
  navTextActive: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0C5F41',
  },
});

export default TermsConditionsScreen;
