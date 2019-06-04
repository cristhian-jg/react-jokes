import React, { Component } from 'react';
import { StyleSheet, Linking } from 'react-native';
import { Card, CardItem, Icon, Text, Right } from 'native-base';

export default class MyCardComponent extends React.Component {
  render() {
    return(
      <Card style={styles.myCard}>
             <CardItem>
              <Icon active name="logo-twitter" />
              <Text style={{color: 'red'}}
      onPress={() => Linking.openURL('https://twitter.com/')}> Twitter </Text>
             </CardItem>
             <CardItem>
              <Icon active name="logo-facebook"/>
              <Text style={{color: 'red'}}
      onPress={() => Linking.openURL('https://facebook.com/')}> Facebook </Text>
             </CardItem>
             <CardItem>
              <Icon active name="logo-instagram" />
              <Text style={{color: 'red'}}
      onPress={() => Linking.openURL('https://instagram.com/')}> Instagram </Text>
             </CardItem>
           </Card>
    )
  }
}

const styles = StyleSheet.create({
  myCard: {
      flex: 1,
      marginTop: '10%', 
  }
})