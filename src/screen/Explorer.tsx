import * as React from 'react';
import { useState } from 'react';
import {  View, Text, TouchableOpacity, SafeAreaView, TextInput, FlatList, Image } from 'react-native';

const Explorer: React.FC<{navigation: any}> = ({navigation}) => {
  const DATA0 = [
    {
      id: 1,
      title: 'Top Categories'
    },
    {
      id: 2,
      title: 'Popular Items'
    },
    {
      id: 3,
      title: 'Ao that day'
    },
  ]
  const DATA = [
    {
      id: 1,
      name: 'Pizza',
      url: 'https://thumbs.dreamstime.com/z/vegetarian-pizza-jalapeno-pepper-white-background-top-vegetarian-pizza-jalapeno-pepper-white-isolated-131054163.jpg'
    },
    {
      id: 2,
      name: 'Burgers',
      url:'https://burgerking.vn/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/c/r/crunchy_whp-min_1.jpg'
    },
    {
      id: 3,
      name: 'Steak',
      url:'data:image/jpeg;base64,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'
    },
    {
      id: 4,
      name: 'Sting',
      url:'https://bizweb.dktcdn.net/100/361/770/products/nuoc-tang-luc-sting-dau-lon-330ml.jpg?v=1570676502267'
    },
    {
      id: 5,
      name: 'Snack',
      url:'https://dl.airtable.com/fiYrslnASRWmPmGd1Bgw_8934803044300-1-large%402x.jpg'
    },
  ]
  
  return (
    <SafeAreaView >
      <View style={{backgroundColor:"white"}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>Explorer</Text>
      </View>
      <TextInput style={{backgroundColor:'white', borderRadius: 8, margin: 10, width: 350, height: 50}} placeholder="Search for meals or area"/>
      <FlatList
        data={DATA0}
        renderItem={(item0) => (
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>{item0.item.title}</Text>
            <FlatList
              data={DATA}
              renderItem={({item}) => (
                <View style={{margin: 20}}>
                  <Image style={{width: 200, height: 100, borderRadius: 8}} source={{uri: item.url}}/>
                  <Text style={{fontSize: 20, marginLeft: 70, margin: 10}}>{item.name}</Text>
                </View>
              )}
              horizontal={true}
            />            
          </View>
        )}
      />
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <View style={{margin: 20}}>
              <Image style={{width: 200, height: 100, borderRadius: 8}} source={{uri: item.url}}/>
              <Text style={{fontSize: 20, marginLeft: 70, margin: 10}}>{item.name}</Text>
            </View>
          )}
          horizontal={true}
        />
    </SafeAreaView>
  );
  
}
export default Explorer;