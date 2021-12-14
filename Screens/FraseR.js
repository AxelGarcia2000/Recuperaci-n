import { StyleSheet, Text, View} from 'react-native'
import { Card, Header } from 'react-native-elements';
import { FraseContext } from '../Context/FraseContext';
import React, { useContext } from 'react';

const FraseR = ({ navigation }) => {
  const { oracion, api1 } = useContext(FraseContext);
    return (
        <View style={{ fontWeight: "bold", fontSize: 19, color:'white',  alignItems: 'center',
         justifyContent: 'center', flex: 1,}}>
        
          
      {oracion.map((x) =>
        <Text >{x.q}</Text>
      )}
  
  
  </View>
    )
}
export default FraseR;

