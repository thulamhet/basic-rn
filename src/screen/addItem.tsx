import axios from 'axios';
import * as React from 'react';
import { useContext, useState } from 'react';
import {  View, Text, TouchableOpacity, SafeAreaView, Image, Button, TextInput, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useMutation, useQueryClient } from 'react-query';

const addItem: React.FC<{navigation: any}> = ({navigation}) => {
  const queryClient = useQueryClient();
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [url, setUrl] = useState('')
  const item = {
    name: name,
    price: price,
    url: url,
  }
  const setAllState = () => {
    setName('');
    setPrice('');
    setUrl('');
  }

  const mutation = useMutation(newTodo => axios.post('https://60b0a7c81f26610017ffed12.mockapi.io/api/food', newTodo), {
    onSuccess: () => {
      Alert.alert('Success');
      queryClient.invalidateQueries('items');
    },
  })
  const submit = () => {
    // @ts-ignore
    mutation.mutate({
      name: name,
      url: url,
      price: price,
    })
  }

  return (
    <SafeAreaView>
          <View style={{marginTop: 100, alignItems: 'center'}}>
            <TextInput 
              style={{borderColor:'gray',borderWidth: 1, margin: 10, borderRadius: 8, width: 150}}
              placeholder='name'
              onChangeText={setName}
            />
            <TextInput 
              style={{borderColor:'gray',borderWidth: 1, margin: 10, borderRadius: 8, width: 150}}
              placeholder='url'
              onChangeText={setUrl}
            />
            <TextInput 
              style={{borderColor:'gray',borderWidth: 1, margin: 10, borderRadius: 8, width: 150}}
              placeholder='price'
              onChangeText={setPrice}
            />
          </View>
          <View style={{flexDirection:'row', marginLeft: 110, marginTop: 20}}>
            <TouchableOpacity style={{width:50}} onPress={() => {
              // setModalVisible(false);
              if(url !== '' && name !== '' && price !== '')
             
              submit()
              setAllState();
              navigation.navigate('Explorer');
            }}>
              <FontAwesome5 name={'check'} size={25} style={{color: 'black', borderRadius: 8, margin: 10}} solid/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 75}} onPress={() => {
              // setModalVisible(false);
              setAllState();
            }}>
              <FontAwesome5 name={'window-close'} size={25} style={{color: 'black', borderRadius: 8, margin: 10}} solid/>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    )
}
export default addItem;

function newTodo(newTodo: any) {
  throw new Error('Function not implemented.');
}

