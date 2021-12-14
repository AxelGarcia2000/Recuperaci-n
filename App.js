import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation1 from './Navigations/StackNavigation1';
import Fraseprovider from './Context/FraseContext';


export default function App() {
  return (
    <Fraseprovider>
      <NavigationContainer>
        <StackNavigation1/>
      </NavigationContainer>
    </Fraseprovider>
  );
}

