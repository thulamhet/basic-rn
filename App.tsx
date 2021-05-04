/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
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

export const orangeColor = '#E7421B';

const initialData = [
  {
    id: 1,
    title: 'lenovo',
    price: 1000.0,
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5eqK_mbxJ8X2ch7mkPygAc1aJs4pGe-FCkA&usqp=CAU',
  },
  {
    id: 2,
    title: 'dell',
    price: 1000.0,
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-EX5nW0bS69BUjwU2kzKPm7nqIC0sdu5Eg&usqp=CAU',
  },
  {
    id: 3,
    title: 'asus',
    price: 1000.0,
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLLuo4Oq3eov8b3nFnpq1xNIFJopLLkvrQ9A&usqp=CAU',
  },
  {
    id: 4,
    title: 'apple',
    price: 1000.0,
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-EX5nW0bS69BUjwU2kzKPm7nqIC0sdu5Eg&usqp=CAU',
  },
  {
    id: 5,
    title: 'hp',
    price: 1000.0,
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-EX5nW0bS69BUjwU2kzKPm7nqIC0sdu5Eg&usqp=CAU',
  },
  {
    id: 6,
    title: 'dell',
    price: 1000.0,
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCN0daqNWndzDcmUA0EcpphZODyye5nUa2A&usqp=CAU',
  },
  {
    id: 7,
    title: 'dell 2020',
    price: 5000.0,
    img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCN0daqNWndzDcmUA0EcpphZODyye5nUa2A&usqp=CAU',
  },
  {
    id: 8,
    title: 'dell 2021',
    price: 99999.0,
    img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCN0daqNWndzDcmUA0EcpphZODyye5nUa2A&usqp=CAU',
  },
];

type CustomItem = {
  id: number;
  title: string;
  price: number;
  img: string;
};

const Item = ({item}: {item: CustomItem}) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() =>
      Alert.alert(
        'Thông báo',
        'Giá của sản phẩm: $' + item.price + '\nTên của sản phẩm:' + item.title,
      )
    }>
    <Image source={{uri: item.img}} style={styles.img} />
    <Text style={{marginTop: 30}}>{item.title}</Text>
    <Text style={{marginTop: 30, color: 'red', fontSize: 16}}>
      {' '}
      ${item.price}
    </Text>
  </TouchableOpacity>
);


const App = () => {
  const [data, setData] = useState<CustomItem[]>(initialData);
  const [keyword, setKeyWord] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      setData(_.shuffle(data.filter((item) => item.title.includes(keyword.toLowerCase()))));
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [data.length, keyword]);

  const renderItem = ({item}: {item: CustomItem}) => <Item item={item} />;

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View>
        <TextInput
          value={keyword}
          onChangeText={text => setKeyWord(text)}
          style={{borderWidth: 1, borderColor: 'grey', height: 50, margin: 10}}
          placeholder={'tìm kiếm'}
        />
      </View>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={{marginTop: 20}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    width: 170,
    height: 300,
    alignItems: 'center',
    borderWidth: 0.5,
    color: 'black',
    margin: 10,
    borderRadius: 8,
  },
  img: {
    width: 120,
    height: 120,
  },
});

export default App;
