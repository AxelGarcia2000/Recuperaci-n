import { StyleSheet, Text, View} from 'react-native'
import { FraseContext } from '../Context/FraseContext';
import React, { useContext } from 'react';

const FraseT = ({ navigation }) => {
    const { oracion, api1 } = useContext(FraseContext);
    return (
        <View style={{ fontWeight: "bold", fontSize: 19, color:'white',  alignItems: 'center',
         justifyContent: 'center', flex: 1,}}>
                 {oracion.map((y) =>
                 <Text >{y.q}</Text>
             )}
       </View>
    )
}

export default FraseT;
