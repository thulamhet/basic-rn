import axios from 'axios';
import * as React from 'react';
import { useContext, useState } from 'react';
import {  View, Text, TouchableOpacity, SafeAreaView, Image, Button, TextInput } from 'react-native';
import { AnswerContext } from '../../App';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';



const addItem: React.FC<{navigation: any, changeItem: (data: any) => void}> = ({navigation}) => {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [url, setUrl] = useState('')
  const setAllState = () => {
    setName('');
    setPrice('');
    setUrl('');
  }
  const getAPI = () => {
    axios.get('https://60b0a7c81f26610017ffed12.mockapi.io/api/food').then(res => {
      setFood(res.data);
      setLoading(false);
    }).catch((e) => {
      setLoading(false);
      console.log(e);
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
              setModalVisible(false);
              if(url !== '' && name !== '' && price !== '')
                axios.post('https://60b0a7c81f26610017ffed12.mockapi.io/api/food', {
                  name: name,
                  price: price,
                  url: url,
                });
              getAPI();
              setAllState();
            }}>
            
              <FontAwesome5 name={'check'} size={25} style={{color: 'black', borderRadius: 8, margin: 10}} solid/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 75}} onPress={() => {
              setModalVisible(false);
              setAllState();
            }}>
              <FontAwesome5 name={'window-close'} size={25} style={{color: 'black', borderRadius: 8, margin: 10}} solid/>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    )
}
export default addItem;

