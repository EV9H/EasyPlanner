import React, {Component} from "react";
import { TouchableOpacity} from "react-native";
import { AntDesign } from "@expo/vector-icons";
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
  Spacer,
  useSafeArea,
  Avatar,
  Fab,
  Icon,
  
} from "native-base";

import {Agenda, DateData, AgendaEntry, AgendaSchedule} from 'react-native-calendars';
import { Card } from "react-native-paper";
import {SafeAreaView} from 'react-native-safe-area-context';

export default function PlanScreen({navigation}){
    const [items, setItems] = React.useState({});
    const [content, setContent] = React.useState("");
    const [selectedDay, setSelectedDay] = React.useState("");

    const timeToString = (time) => {
      const date = new Date(time);
      return date.toISOString().split('T')[0];
    }

    const addItem = (day) =>{

    }

    const loadItems = (day) =>{
      const items = items || {};
      setTimeout(() => {
        for (let i = -5; i < 85; i++) {
          const time = day.timestamp + i * 24 * 60 * 60 * 1000;
          const strTime = timeToString(time);
  
          if (!items[strTime]) {
            items[strTime] = [];
            
            const numItems = Math.floor(1);
            for (let j = 0; j < numItems; j++) {
              items[strTime].push({
                name: 'Item for ' + strTime + ' #' + j,
                height: 100,
                day: strTime
              });
            }
          }
        }
        const newItems = {};
        Object.keys(items).forEach(key => {
          newItems[key] = items[key];
        });
        setItems(newItems);
      }, 1000);
      
    }
    
    const renderItem =(item) =>{
      
      return (
      <TouchableOpacity style = {{marginRight : 10 , marginTop: 17}}>
          <Card>
            <Card.Content>
              <Box flexDirection = {'row'} justifyContent = {'space-between'} alignItems = 'center'
              > 
                <Text>
                  {item.name}
                </Text>
                <Avatar bg="blue.400">
                HH
               </Avatar>
              </Box>
            </Card.Content>
          </Card>
      </TouchableOpacity>)
    }
    return (
      <NativeBaseProvider >
        
        <Box flex = {1} backgroundColor = {"white"}>
           <Box flex= {1} mt = {10}>
            <Agenda 
              items = {items}
              loadItemsForMonth={loadItems} 
              selected = {'2022-07-05'} 
              renderItem = {renderItem}
              onDayPress={day => {
                console.log( day.dateString + 'day pressed');
              }}
              onDayChange={day => {
                console.log( day.dateString + 'day changed');
              }}
            />

            <Fab onPress={()=>{}} renderInPortal={false} shadow={5} size="sm" icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />} />
           </Box>

        </Box>
        
      </NativeBaseProvider>
      


    );
  };
  
  