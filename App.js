import React, {Component} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Button,Text} from "react-native";

import HomeScreen from "./pages/HomeScreen"
import PlanScreen from "./pages/PlanScreen"
import GuideScreen from "./pages/GuideScreen"
import About from './pages/About'
import SettingScreen from './pages/SettingScreen'
import LoginScreen from './pages/LoginScreen'
import AccountScreen from './pages/AccountScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen name = "Home" component={HomeScreen} options = {{headerShown: false}} />
        <Stack.Screen name = "Plan" component={PlanScreen}  options = {{headerShown: true}} />
        <Stack.Screen name = "Guide" component={GuideScreen}  options = {{headerShown: true}} />
        <Stack.Screen name = "About" component={About}  options = {{headerShown: true}} />
        <Stack.Screen name = "Settings" component={SettingScreen}  options = {{headerShown: true}} />
        <Stack.Screen name = "Login" component={LoginScreen}  options = {{headerShown: false}} />
        <Stack.Screen name = "Account" component={AccountScreen}  options = {{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// const ProfileScreen = ({ navigation, route }) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };