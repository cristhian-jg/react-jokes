import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Document, TextInput } from 'react-native';
import { Container, Header, Content, Title, Left, Body, Right, Footer, FooterTab,  } from "native-base";
import { Form, Item, Label, Input, Icon, Button as ButtonBase } from "native-base";
import { Card, CardItem } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import MyCardComponent from './components/MyCardComponent';

export default class HomeScreen extends Component {

  constructor(props) {
    //constructor to set default state
    super(props);
    this.state = {
      name: '',
      surname: '',
    };
  }

  render() {
    return (
        <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Home <Ionicons name='ios-home' width='100%'/></Title>
          </Body>
          <Right />
        </Header>
        <ImageBackground source={require('./images/HomeScreenBackground.png')} style={styles.container}>
        <Content style={styles.content}>
          <Form style={styles.myForm}>
                <Item style={styles.myItem}>
                  <TextInput
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
          placeholder={'Name'}
          style={styles.input}/>
                </Item>
                <Item style={styles.myItem}>
                  <TextInput
          value={this.state.surname}
          onChangeText={surname => this.setState({ surname })}
          placeholder={'Surname'}
          style={styles.input}/>
                </Item>
              </Form>
            <ButtonBase info block style={styles.myButton} onPress={() => this.props.navigation.navigate('SecondScreen', { JSON_ListView_Clicked_Item: [this.state.name, ` ` , this.state.surname] } )}><Title>Log In</Title></ButtonBase>
          <MyCardComponent />
        </Content>
        <Footer>
          <FooterTab>
            <ButtonBase full>
              <Text>Application created by Cristhian ds.</Text>
            </ButtonBase>
          </FooterTab>
        </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    margin: '3%',
    padding: '0.5%',
    backgroundColor: 'white',
    opacity: 0.9,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#d6d7da',
  },
  myItem: {
    marginTop: '5%'
  },
  myButton: {
    flex: 1,
    alignItems: 'center',
    marginTop: '10%',
    justifyContent: 'center'
  },
   input: {
    width: 200,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#DBDBD6',
  }
});