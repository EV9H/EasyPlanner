import React, {Component} from "react";
import {Button,Text} from "react-native";

export default function PlanScreen({navigation}){
  
    return (
      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate('Home')
        }
      />
    );
  };
  
  