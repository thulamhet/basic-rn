/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {createContext, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Survey from './src/screen/survey';
import Survey2 from './src/screen/survey2';
import Answers from './src/screen/Answers';

export const orangeColor = '#E7421B';
const Stack = createStackNavigator();

const initialValue = {
  survey1Answer: [],
  survey2Answer: [],
};
export const AnswerContext = createContext({
  answers: {},
  setAnswers: (data: any) => {},
});

const App = () => {
  const [answers, setAnswers] = useState(initialValue);
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <AnswerContext.Provider
        value={{
          answers,
          setAnswers,
        }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Survey" component={Survey} />
            <Stack.Screen name="Survey2" component={Survey2} />
            <Stack.Screen name="Answers" component={Answers} />
          </Stack.Navigator>
        </NavigationContainer>
      </AnswerContext.Provider>
    </SafeAreaView>
  );
};

export default App;
