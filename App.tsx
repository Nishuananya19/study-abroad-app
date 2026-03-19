import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";


export type Program = {
  id: number;
  university: string;
  country: string;
  description: string;
  details: string;
};

export type RootStackParamList = {
  Home: undefined;
  Details: { program: Program };
};


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: "Study Programs" }}
          />
          
          <Stack.Screen 
            name="Details" 
            component={DetailScreen} 
            options={{ title: "Details" }}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </SafeAreaProvider>
  );
}