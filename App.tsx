import Home from "./src/screen/HomeScreen";
import User from "./src/screen/screen1";
import React, {useState} from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screen/HomeScreen";
import screen1 from "./src/screen/screen1";
import screen2 from "./src/screen/screen2";
import screen3 from "./src/screen/screen3";
import screen4 from "./src/screen/screen4";
import screen5 from "./src/screen/screen5";


const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="trang1" component={screen1} />
        <Stack.Screen name="trang2" component={screen2} />
        <Stack.Screen name="trang3" component={screen3} />
        <Stack.Screen name="trang4" component={screen4} />
        <Stack.Screen name="trang5" component={screen5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
