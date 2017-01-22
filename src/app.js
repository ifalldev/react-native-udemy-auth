import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDF2viDL0vVwd_KGGtYX029czFyMh9b0eE',
      authDomain: 'auth-native-test.firebaseapp.com',
      databaseURL: 'https://auth-native-test.firebaseio.com',
      storageBucket: 'auth-native-test.appspot.com',
      messagingSenderId: '793068243300',
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
    case true:
      return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>
      );
    case false:
      return <LoginForm />;
    default:
      return (
        <CardSection>
          <Spinner size="large" />
        </CardSection>
      );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
