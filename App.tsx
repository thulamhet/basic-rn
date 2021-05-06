/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import _ from 'lodash';
import Section from './src/Section';
import NumberButton from "./src/NumberButton";
import SumResult from "./src/SumResult";

export const orangeColor = '#E7421B';

const App = () => {

  const [amount1, setAmount1] = useState<number>(1);
  const [amount2, setAmount2] = useState<number>(1);
  const [amount3, setAmount3] = useState<number>(1);

  console.log(amount1);
  const increaseAmount1 = useCallback(() => {
    setAmount1(amount1 + 1)
  }, [amount1]);

  const increaseAmount2 = useCallback(() => {
    setAmount2(amount2 + 1)
  }, [amount2]);

  const increaseAmount3 = useCallback(() => {
    setAmount3(amount3 + 1)
  }, [amount3]);

  const decrease = () => {}

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <NumberButton amount={amount1} increaseAmount={increaseAmount1} />
      <NumberButton amount={amount2} increaseAmount={increaseAmount2} />
      <NumberButton amount={amount3} increaseAmount={increaseAmount3} />
      <SumResult sum={amount1 + amount2} decreaseAmount={decrease}/>
      <SumResult sum={amount2 + amount3} decreaseAmount={decrease}/>
      <SumResult sum={amount1 + amount2 + amount3} decreaseAmount={decrease}/>
    </SafeAreaView>
  );
};

export default App;
