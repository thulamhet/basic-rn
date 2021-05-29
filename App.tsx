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
        <NavigationContainer>
          {isLoggedIn ? (
              <Stack.Navigator>
              <Stack.Screen name=" " component={HomeScreen} />
              </Stack.Navigator>
            ) : (
              <>
                <Tab.Navigator>
                  <Tab.Screen name="Explorer" component={Explorer} /> 
                  <Tab.Screen name="Account" component={Account} />
                </Tab.Navigator>
              </>
            )
          }
        </NavigationContainer>
      </AnswerContext.Provider>
    );

}

export default App;
