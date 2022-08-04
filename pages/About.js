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
export default function About({navigation}){
  
  return (
    <NativeBaseProvider config={ config}>
          
    </NativeBaseProvider>
  );
};

