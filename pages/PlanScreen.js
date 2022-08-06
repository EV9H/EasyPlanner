import React, {Component} from "react";
import { View, TouchableOpacity} from "react-native";
import { AntDesign } from "@expo/vector-icons";
// https://github.com/wix/react-native-calendars/issues/259 SEE
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
  Modal,
  FormControl,
  Input
  
} from "native-base";

import {Agenda, DateData, AgendaEntry, AgendaSchedule} from 'react-native-calendars';
import { Card } from "react-native-paper";
import {SafeAreaView} from 'react-native-safe-area-context';

export default function PlanScreen({navigation}){
    const [items, setItems] = React.useState({});
    const [content, setContent] = React.useState("");
    const [detail, setDetail] = React.useState("");
    const [selectedDay, setSelectedDay] = React.useState("");
    const [modalVisible, setModalVisible] = React.useState(false);
    const [refreshCalender, setRefreshCalender] = React.useState(false);

    const timeToString = (time) => {
      const date = new Date(time);
      return date.toISOString().split('T')[0];
    }

    const handleAddItem = () => {
      setRefreshCalender(true);
      let newItems = items;
      const time = selectedDay.timestamp;
      console.log(strTime)
      const strTime = timeToString(time);
      console.log(strTime)
      if (!newItems[strTime]) {
        newItems[strTime] = []
      }
      
      newItems[strTime].push({
        name: content,
        height: 100,
        day: strTime
      })

      setItems(newItems)
      setRefreshCalender(false);
    }

    const loadItems = (day) =>{
      const newItems = items || {};
      setTimeout(() => {
        for (let i = -15; i < 85; i++) {
          const time = day.timestamp + i * 24 * 60 * 60 * 1000;
          const strTime = timeToString(time);
  
          if (!newItems[strTime]) {
            newItems[strTime] = [];
            
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
        Object.keys(items).forEach(key => {
          newItems[key] = items[key];
        });
        setItems(newItems);
      }, 1000);
      
    }
    const renderEmptyDate = () => {
      return (
        <View style={{height: 15,
          flex: 1,
          paddingTop: 30}}>
          <Text>This is empty date!</Text>
        </View>
      );
    }

    const rowHasChanged = (r1 = AgendaEntry, r2 = AgendaEntry) => {
      return r1.name !== r2.name;
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
              // renderDay = {renderDay}
              renderItem = {renderItem}
              onDayPress={day => {
                setSelectedDay(day)
              }}
              onDayChange={day => {
                setSelectedDay(day)
              }}
              refreshing={refreshCalender}
              renderEmptyDate={renderEmptyDate}
              rowHasChanged={rowHasChanged}

              showClosingKnob={true}
            />

            <Fab onPress={() => setModalVisible(true)} renderInPortal={false} shadow={5} size="sm" icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />} />
            <Modal size = "lg" isOpen={modalVisible} onClose={() => setModalVisible(false)}>
              <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>New Event </Modal.Header>
                <Modal.Body paddingBottom={10}>
                  <FormControl>
                    <FormControl.Label>Description</FormControl.Label>
                    <Input size = "lg" onChangeText={(text) => {setContent(text)}}/>
                  </FormControl>
                  {/* <FormControl mt="3">
                    <FormControl.Label>Detail</FormControl.Label>
                    <Input />
                  </FormControl> */}
                </Modal.Body>
                <Modal.Footer>
                  <Button.Group space={2}>
                    <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                      setModalVisible(false);
                    }}>
                      Cancel
                    </Button>
                    <Button onPress={() => {
                      setModalVisible(false);
                      handleAddItem();
                      }}>
                      Add
                    </Button>
                  </Button.Group>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
           </Box>

        </Box>
        
      </NativeBaseProvider>
      


    );
  };
  
  