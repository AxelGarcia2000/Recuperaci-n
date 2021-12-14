import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useContext }  from 'react';
import { FraseContext } from '../Context/FraseContext';

const HomeScreen = ({navigation}) => {
   const {api1} = useContext(FraseContext);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around',}}>
            
            <Button 
                title="Frase del Día"
                onPress={()=>{api1('today');navigation.navigate('FraseT')}}
            />
            <Button 
                title="Frase Aleatoria"
                onPress={()=>{api1('random'); navigation.navigate('FraseR')}}
            />
            <Button 
                title="Conjunto de frases"
                onPress={()=>{api1('quotes'); navigation.navigate('FraseQ');}}
            />
        </View>
    )
}
export default HomeScreen

