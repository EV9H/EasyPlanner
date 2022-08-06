import React, {Component} from "react";

import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from "@expo/vector-icons";

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
    Input,
    Icon,
    Stack,
    Spacer,
    KeyboardAvoidingView,
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

export default function LoginScreen({navigation}){
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [show, setShow] = React.useState(false);
    return (
        
        <NativeBaseProvider config={config}>
            <KeyboardAvoidingView behavior="padding" >

                <Box bg = {{linearGradient: {colors: ['red.300', 'violet.800'],start: [0,0],end:[1,0]}}} flex = {1}>
                <VStack space={10} w="100%" alignItems="center" py = "50%">
                    <Heading textAlign={"center"} color = "white"> Login</Heading>
                    <Input w={{base: "75%",md: "25%"}} 
                        InputLeftElement={<Icon as={<MaterialIcons name="person" />} 
                        size={5} ml="2" color="white" /> } 
                        placeholder="Name" 
                        placeholderTextColor = "white"
                        onChangeText={(text) => setUserName(text)}
                        />

                    <Input w={{base: "75%",md: "25%"}} 
                        type={show ? "text" : "password"} 
                        InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} 
                        size={5} mr="2" color="white" onPress={() => setShow(!show)} />} 
                        placeholder="Password" 
                        placeholderTextColor = "white"
                        onChangeText={(text) => setPassword(text)}
                        />
                    
                    <VStack space = {10} alignSelf = "center" flexDirection={"column"}> 
                        <Button backgroundColor = 'rgba(255, 255, 255, 0.1)' onPress={()=> {alert("Logged In! "); navigation.navigate("Home", {userName: userName})}}> Login </Button>
                        
                        <Button backgroundColor = 'rgba(255, 255, 255, 0.1)' onPress={()=> {alert("Signup Attempted")}}> Sign Up </Button>
                    </VStack>
                </VStack>

                </Box>
                


            </KeyboardAvoidingView>
        </NativeBaseProvider>
    );
};

