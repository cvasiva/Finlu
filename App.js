/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-undef */
// /* eslint-disable no-unused-vars */
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';
import StartingPage from './src/components/StartingPage';
import LoginPage from './src/components/LoginPage';
import IncomeProvider from './src/Auth/IncomeProvider';
import SigninPage from './src/components/SigninPage';
import RegisterYour from './src/components/RegisterYour';
import CreateProfile from './src/components/CreateProfile';
import BankDetails from './src/components/BankDetails';
import TransactionReport from './src/components/TransactionReport';
import PayableScreen from './src/components/PayableScreen';
import GroupScreen from './src/components/GroupScreen';
import CreateGroupScreen from './src/components/CreateGroupScreen';
import BusinessChatScreen from './src/components/BusinessChatScreen';
import Receivablechatscreen from './src/components/Receivablechatscreen';
import FinancialReport from './src/components/FinancialReport';
import ProfileScreen from './src/components/ProfileScreen';
import ProfileDetailsScreen from './src/components/ProfileDetailsScreen';
import AddPaymentMethod from './src/components/AddPaymentMethod';
import FeedbackScreen from './src/components/FeedbackScreen';
import HelpDeskScreen from './src/components/HelpDeskScreen';
import TermsConditionsScreen from './src/components/TermsConditionsScreen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#00753A', // Active tab color
        tabBarInactiveTintColor: '#9B9B9B', // Inactive tab color
        tabBarLabelStyle: {
          fontSize: 12, // You can adjust the label size here
        },
      }}>
      <Tab.Screen
        name="PayableScreen"
        component={PayableScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
          headerShown: false
        }}
      />
      {/* Example of adding more tabs with icons */}
      <Tab.Screen
        name="Group"
        component={GroupScreen} // Replace with actual component
        options={{
          tabBarLabel: 'Group',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="group" size={size} color={color} />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={PayableScreen} // Replace with actual component
        options={{
          tabBarLabel: 'Scanner',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={size}
              color={color}
            />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Report"
        component={FinancialReport} // Replace with actual component
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-document"
              size={size}
              color={color}
            />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen} // Replace with actual component
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <IncomeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="startingpage"
            component={StartingPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="loginPage"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="signinPage"
            component={SigninPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="registeryour"
            component={RegisterYour}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="createprofile"
            component={CreateProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="bankdetails"
            component={BankDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="transactionreport"
            component={TransactionReport}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="creategroupscreen"
            component={CreateGroupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="businesschatscreen"
            component={BusinessChatScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="receivablechatscreen"
            component={Receivablechatscreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="profiledetailsscreen"
            component={ProfileDetailsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="addpaymentmethod"
            component={AddPaymentMethod}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="feedbackscreen"
            component={FeedbackScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="helpdeskscreen"
            component={HelpDeskScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="termsconditionsscreen"
            component={TermsConditionsScreen}
            options={{ headerShown: false }}
          />
          {/* 
          <Stack.Screen
            name="createprofile"
            component={CreateProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="registerdetails"
            component={RegisterDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="paymentdetails"
            component={PaymentDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="transactionreport"
            component={TransactionReport}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={BottomTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="payablescreen"
            component={PayableScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="groupscreen"
            component={GroupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="creategroup"
            component={CreateGroup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="outstandingbalancescreen"
            component={OutstandingBalanceScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="receivablechat"
            component={ReceivableChat}
            options={{ headerShown: false }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </IncomeProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 60,
    position: 'absolute',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -3 },
  },
});

export default App;
