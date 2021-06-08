import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, Modal } from 'react-native';
import {  View, Text, TouchableOpacity, SafeAreaView, TextInput, FlatList, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useMutation, useQueryClient } from 'react-query';
import { Mutation } from 'react-query/types/core/mutation';
import { useQueryItems } from '../queryHook/useQueryItems';


const Explorer: React.FC<{navigation: any}> = ({navigation}) => {
  const itemQuery = useQueryItems();
  const queryClient = useQueryClient();
  console.log(itemQuery)
  if(itemQuery.isLoading) {
    return <ActivityIndicator size={30} color='black'/>
  }
  const mutation = useMutation((id) => axios.delete(`https://60b0a7c81f26610017ffed12.mockapi.io/api/food/${id}`), {
    onSuccess: () => {
      Alert.alert('Success');
      queryClient.invalidateQueries('items');
    },
  })

  const submit = (id) => {
    // @ts-ignore
    mutation.mutate({
        id: id,
      }
    )
  }

  return (
    <SafeAreaView style={{flex: 1}}>      
      <TextInput style={{backgroundColor:'white', borderRadius: 8, margin: 10, width: 350, height: 50}} placeholder="Search for meals or area"/>     
      {/* <TouchableOpacity style={{width:50, marginLeft: 20}} onPress={() => {
        // setModalVisible(true)
      }}>
        <FontAwesome5 name={'user-plus'} size={25} style={{color: 'black', borderRadius: 8, margin: 10}} solid/>
      </TouchableOpacity> */}
      <Button
        title='add'
        onPress={()=> {
          navigation.navigate('addItem');
        }}
      />
      
      <FlatList
        data={itemQuery?.data?.data || []}
        renderItem={({item}) => (
          <View style={{margin: 20, flexDirection:'row', borderWidth: 3, borderColor: 'gray', borderRadius:8}}>
            <Image style={{width: 160, height: 133, borderRadius: 8}} source={{uri: item.url}}/>
            <View style={{marginLeft: 20, margin: 30, width: 100}}>
              <Text style={{fontSize: 20, color: 'red'}}>{item.name}</Text>
              <Text style={{fontWeight:'bold'}}>${item.price}</Text>
            </View>
            <TouchableOpacity style={{width:50, marginTop: 60}} onPress={() => submit(item.id)}>
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