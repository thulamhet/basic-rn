import Home from "./src/screen/HomeScreen";
import User from "./src/screen/Explorer";
import React, {createContext, useState} from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screen/HomeScreen";
import Explorer from "./src/screen/Explorer";
import Account from "./src/screen/Account";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import store from './src/redux/store';
import addItem from "./src/screen/addItem";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

export const AnswerContext = createContext({
  isLoggedIn: {},
  setLoggedIn: (data: any) => {},
});

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
    return (
      <AnswerContext.Provider value={{isLoggedIn, setLoggedIn}}>
        <Provider store={store}>

        
        <NavigationContainer>
          {isLoggedIn ? (
              <Stack.Navigator>
              <Stack.Screen name=" " component={HomeScreen} />
              </Stack.Navigator>
            ) : (
              
                <Stack.Navigator>
                  <Stack.Screen name="Explorer" component={Explorer} /> 
                  <Stack.Screen name="Account" component={Account} />
                  <Stack.Screen name="addItem" component={addItem} />
                </Stack.Navigator>
              
            )
          }
        </NavigationContainer>
        </Provider>
      </AnswerContext.Provider>
    );

}

export default App;