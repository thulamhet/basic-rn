import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const Data = [
  {
    id: 1,
    title: 'green'
  },
  {
    id: 2,
    title: 'blue'
  },
  {
    id: 3,
    title: 'brown'
  },
  {
    id: 4,
    title: 'yellow'
  },
  {
    id: 5,
    title: 'red'
  },
  {
    id: 6,
    title: 'black'
  }
]

type customItem = {

  title: string
}

const App = () => {
  const [color, setColor] = useState('')
  console.log('====================================');
  console.log(color);
  console.log('====================================');
  const Item = ({ item }: { item: customItem }) => (
    <TouchableOpacity style={{ height: 60, borderRadius: 8, backgroundColor: (item.title), margin: 20, justifyContent: 'center', alignItems: 'center' }}
      onPress={() => setColor(`${item.title}`)} // trong onPress la ham rut gon

    >
      <Text style={{ color: 'white' }}>{item.title}</Text>
    </TouchableOpacity>
  )

  const renderItem = ({ item }: { item: customItem }) => (
    <Item item={item} />
  )



  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={{ backgroundColor: `${color}` }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1
  }
});

export default App;