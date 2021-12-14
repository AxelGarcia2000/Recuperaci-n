import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import FraseQ from '../Screens/FraseQ';
import FraseR from '../Screens/FraseR';
import FraseT from '../Screens/FraseT';
const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
            options={{headerShown:false, headerTitle:'Inicio'}}
            />
             <Stack.Screen name="FraseT" component={FraseT}/>         
             <Stack.Screen name="FraseR" component={FraseR}/>
             <Stack.Screen name="FraseQ" component={FraseQ}/>
        </Stack.Navigator>

    )
}