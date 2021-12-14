import React, { createContext, useState } from 'react';
import { Text, View, StyleSheet, Button,} from "react-native";

export const FraseContext = createContext();

const Fraseprovider = (props) => {
  const [oracion, setoracion] = useState([]);

  const api1 = (as) => {
    const api_url = `https://zenquotes.io/api/${as}`;
    fetch(api_url)
      .then((data) => {
        return data.json();
      })
      .then((resultado) => {
        console.log(resultado);
        setoracion(resultado);
      });
  };
  return (
    <FraseContext.Provider
      value={{
        oracion,
        api1,
      }}>
      {props.children}
    </FraseContext.Provider>
  );
};
export default Fraseprovider;