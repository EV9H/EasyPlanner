import React, {Component} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainContainer from "./pages/MainContainer";
import SSRProvider from 'react-bootstrap/SSRProvider';


export default function App() {
  return (
    <SSRProvider>
        <MainContainer/>
    </SSRProvider>

  );
}


// const ProfileScreen = ({ navigation, route }) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };

{/* <NavigationContainer>
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
    </NavigationContainer> */}