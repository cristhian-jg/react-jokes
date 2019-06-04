import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { Container, Content, Button as ButtonBase, Footer, FooterTab, Title } from 'native-base';
import MyAxiosComponent from './components/MyAxiosComponent';

export default class SecondScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Container>
        <ImageBackground source={require('./images/SecondScreenBackground.jpg')} style={styles.container}>
          <Content style={styles.content}>
              <Text style={styles.TextStyle}>
          {`Welcome`} {this.props.navigation.state.params.JSON_ListView_Clicked_Item
            ? this.props.navigation.state.params.JSON_ListView_Clicked_Item
            : 'to my App!'}{`\n`}
            </Text>
            
            <Text>{`Here you have the best jokes about programming for today!\n`}</Text>
            <MyAxiosComponent />
          </Content>
        </ImageBackground>
          <Footer>
          <FooterTab>
            <ButtonBase warning style={styles.myButton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Title>Back</Title>
            </ButtonBase>
          </FooterTab>
        </Footer> 
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
},
  content: {
      margin: '10%',
      padding: '5%',
      backgroundColor: 'white',
      opacity: 0.9,
      borderRadius: 5,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
  },
   myButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  TextStyle: {
    fontSize: 23,
    textAlign: 'center',
    color: '#f00',
  },
});