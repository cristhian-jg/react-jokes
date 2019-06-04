import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import SecondScreen from "./SecondScreen";

const AppNavigator = createStackNavigator({
 HomeScreen: { screen: HomeScreen },
 SecondScreen: { screen: SecondScreen }},
  {
    headerMode: 'none'
});

export default createAppContainer(AppNavigator);