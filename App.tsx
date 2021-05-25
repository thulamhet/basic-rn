/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import AppNavigation from './src/AppNavigation';

export const orangeColor = '#E7421B';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <AppNavigation />
    </SafeAreaView>
  );
};

export default App;
