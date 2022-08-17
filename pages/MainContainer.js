import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


import HomeScreen from "./HomeScreen"
import PlanScreen from "./PlanScreen"
import GuideScreen from "./GuideScreen"
import About from './About'
import SettingScreen from './SettingScreen'
import AccountScreen from './AccountScreen'

// Screen Names 
const homeName = 'Home'
const accountName = 'Account'
const planName = 'Plan'
const settingName = 'Settings'

const Tab = createBottomTabNavigator()
export default function MainContainer(){
    return(
        <SafeAreaProvider>


            <NavigationContainer>
                <Tab.Navigator 
                    initialRouteName= {homeName}
                    screenOptions = {
                        
                        ({route}) => ({
                        tabBarIcon: ({focused, color, size}) =>{
                            let iconName;
                            let routename = route.name;
                            if(routename === homeName){
                                iconName = focused ? 'home' : 'home-outline'
                            }else if (routename === accountName){
                                iconName = focused ? 'person' : 'person-outline'
                            }else if (routename === planName){
                                iconName = focused ? "calendar" : 'calendar-outline'
                            }else if (routename === settingName){
                                iconName = focused ? "settings" : "settings-outline"
                            }
                            return <Ionicons name = {iconName} size = {size} color = {color}/>
                        }, 
                        
                            tabBarActiveTintColor: 'tomato',
                            tabBarInactiveTintColor: 'grey',
                            tabBarLabelStyle: {paddingBottom : 5, fontSize: 10},
                            tabBarStyle: {paddingTop: 10, height: 90},
                            headerShown: false,

                        
                    })}
                    
                >
                    
                <Tab.Screen name = {homeName} component = {HomeScreen}/>
                <Tab.Screen name = {planName} component = {PlanScreen}/>
                <Tab.Screen name = {accountName} component = {AccountScreen}/>
                <Tab.Screen name = {settingName} component = {SettingScreen}/>
                </Tab.Navigator>


            </NavigationContainer>
        </SafeAreaProvider>
    )
}