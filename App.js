import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/components/HomeScreen';

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen }
},
  { headerMode: 'hidden' }
);

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e8',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
