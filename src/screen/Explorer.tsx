import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, Modal } from 'react-native';
import {  View, Text, TouchableOpacity, SafeAreaView, TextInput, FlatList, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const urlAPI = 'https://60b0a7c81f26610017ffed12.mockapi.io/api/food';

const Explorer: React.FC<{navigation: any}> = ({navigation}) => {
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
    axios.get(urlAPI).then(res => {
      setFood(res.data);
      setLoading(false);
    }).catch((e) => {
      setLoading(false);
      console.log(e);
    }) 
  }
  useEffect(() => {
    setLoading(true);
    getAPI();
  }, []);
 
  if (loading) return (<ActivityIndicator size="large" color="#00ff00" />)
  return (
    <SafeAreaView style={{flex: 1}}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
       
      >
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
                axios.post(urlAPI, {
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
      </Modal>
        
      <View style={{backgroundColor:"white"}}>
      {/* <FontAwesome5 name={'plus'} size={32} style={{}} solid/>
      <FontAwesome5.Button name={'plus'} /> */}
        <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>Explorer</Text>
      </View>
      <TextInput style={{backgroundColor:'white', borderRadius: 8, margin: 10, width: 350, height: 50}} placeholder="Search for meals or area"/>     
      <TouchableOpacity style={{width:50, marginLeft: 20}} onPress={() => {
        setModalVisible(true)
      }}>
        <FontAwesome5 name={'user-plus'} size={25} style={{color: 'black', borderRadius: 8, margin: 10}} solid/>
      </TouchableOpacity>
      
      <FlatList
        data={food}
        renderItem={({item}) => (
          <View style={{margin: 20, flexDirection:'row', borderWidth: 3, borderColor: 'gray', borderRadius:8}}>
            <Image style={{width: 155, height: 110}} source={{uri: item.url}}/>
            <View style={{marginLeft: 20, margin: 30, width: 100}}>
              <Text style={{fontSize: 20, color: 'red'}}>{item.name}</Text>
              <Text style={{fontWeight:'bold'}}>${item.price}</Text>
            </View>
            <TouchableOpacity style={{width:50, marginTop: 60}} onPress={() => {
              axios.delete(`https://60b0a7c81f26610017ffed12.mockapi.io/api/food/${item.id}`).then(()=> {
                console.log('success')
              }).catch(error => console.log(error))
              getAPI();
            }}>
              <FontAwesome5 name={'trash'} size={25} style={{color: 'black', borderRadius: 8, margin: 10}} solid/>
            </TouchableOpacity>
           
          </View>
        )}
        />
    </SafeAreaView>
  );
  
}
export default Explorer;

/**
 * ? 'https://i.pinimg.com/736x/3b/74/bc/3b74bca401101300aba962b2d867a209.jpg'
 * ? 'https://photo-cms-baonghean.zadn.vn/w607/Uploaded/2021/ftgbtgazsnzm/2020_07_14/ngoctrinhmuonsinhcon1_swej7996614_1472020.jpg'
 */