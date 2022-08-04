import React, {Component} from "react";

import { LinearGradient } from 'expo-linear-gradient';

import {
    Text,
    Link,
    HStack,
    Center,
    Heading,
    Switch,
    useColorMode,
    NativeBaseProvider,
    extendTheme,
    VStack,
    Box,
    Button,
    Spacer
} from "native-base";
import { Pressable } from "react-native";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
  dependencies: {
    'linear-gradient': LinearGradient
  }
};
export const theme = extendTheme({ config });

var LOGGED_IN = false
var displayUserName = ""


export default function HomeScreen({route, navigation}){
  const [loggedIn, setLoggedIn] = React.useState(false)

  if( route.params == null){
     displayUserName = "Login->"
     
  }else{
    const {userName} = route.params
    displayUserName = userName 
    LOGGED_IN = true
    // setLoggedIn(true)  NOT USED TEMPORARILY BC INFINITE RENDER
    
  }


  return (
    <NativeBaseProvider config={ config}>
          {/* <Heading size = "lg" bg = "lightBlue.600" textAlign = 'center' py = {10}> <Text color = "white"> Your Planner </Text> </Heading> */}
          <VStack
            _dark={{ bg: "blueGray.900" }}
            _light={{ bg: "blueGray.50" }}
            px={4}
            flex={1}

          >
            
            <HStack>
              <Heading size = "lg" marginTop={10} marginBottom = {5}> Welcome, <Text color= 'lightBlue.800'>{displayUserName}</Text> </Heading>
              <Spacer/>
              {!LOGGED_IN? <Button my = {9} px = {12}   onPress = { () => {navigation.navigate('Login'); }}>Login</Button> : <Button my = {9} px = {12}   onPress = { () => {navigation.navigate('Account'); }}>Account</Button> }
              
              

            </HStack>
            
          <Pressable rounded = "xl" bg = "blueGray.50" margin={0}  onPress={() => navigation.navigate('Plan')}>
              <Box bg = {{linearGradient: {colors: ['red.300', 'violet.800'],start: [0,0],end:[1,0]}}}
              p = "20" rounded = "xl" _text = {{
                fontSize: '2xl',
                fontWeight: "medium",
                color: 'warmGray.50',
                textAlign: 'center'
              }}> 
              View Your Plan
              </Box>
          </Pressable>
          <Spacer/>
          <Box>
            <Pressable rounded = "xl" bg = "blueGray.50" margin = {0} onPress={() => navigation.navigate('Settings')}>
                <Box bg = {{linearGradient: {colors: ['pink.300', 'violet.800'],start: [0,0],end:[1,0]}}}
                p = "12" rounded = "xl" _text = {{
                  fontSize: '2xl',
                  fontWeight: "medium",
                  color: 'warmGray.50',
                  textAlign: 'center'
                }}> 
                Settings
                </Box>
            </Pressable>
          </Box>  

          <Spacer/>
          <Box>
            <Pressable rounded = "xl" bg = "blueGray.50" margin = {0} onPress={() => navigation.navigate('Guide')}>
                <Box bg = {{linearGradient: {colors: ['pink.300', 'violet.800' ],start: [0,0],end:[1,0]}}}
                p = "12" rounded = "xl" _text = {{
                  fontSize: '2xl',
                  fontWeight: "medium",
                  color: 'warmGray.50',
                  textAlign: 'center'
                }}> 
                Guide: plan in the best way
                </Box>
            </Pressable>
          </Box>  
          <Spacer/>
          <Box>
            <Pressable rounded = "xl" bg = "blueGray.50" margin = {0} onPress={() => navigation.navigate('About')}>
                <Box bg = {{linearGradient: {colors: ['pink.300', 'violet.800'],start: [0,0],end:[1,0]}}}
                p = "12" rounded = "xl" _text = {{
                  fontSize: '2xl',
                  fontWeight: "medium",
                  color: 'warmGray.50',
                  textAlign: 'center'
                }}> 
                About
                </Box>
            </Pressable>
          </Box>  

          <Spacer/>


          </VStack>
        </NativeBaseProvider>
  );
};

