import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDF2viDL0vVwd_KGGtYX029czFyMh9b0eE',
      authDomain: 'auth-native-test.firebaseapp.com',
      databaseURL: 'https://auth-native-test.firebaseio.com',
      storageBucket: 'auth-native-test.appspot.com',
      messagingSenderId: '793068243300',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>WHATSUP</Text>
      </View>
    );
  }
}

export default App;
