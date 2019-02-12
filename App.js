import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MaterialIcons,MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons';
import MainStackNavigation from './navigation/Navigation';
export default class App extends React.Component {
  render() {
    return (
        <MainStackNavigation />  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
