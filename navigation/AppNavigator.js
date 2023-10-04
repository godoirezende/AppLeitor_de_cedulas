import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BemVindo from "../telas/BemVindo";

import Camera from "../telas/Camera";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bem Vindo" alt="Bem Vindo" component={BemVindo} />
        <Stack.Screen name="Camera" alt="Câmera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
