import * as React from 'react';
import { useContext } from 'react';
import {  View, Text, TouchableOpacity, SafeAreaView, Image, Button } from 'react-native';
import { AnswerContext } from '../../App';

export let count1 : number = 1;

const Account: React.FC<{navigation: any}> = ({navigation}) => {
  const context = useContext(AnswerContext);
  const {isLoggedIn, setLoggedIn} = context;
    return (
      <SafeAreaView >
        <View style={{backgroundColor:'white',height:50 ,justifyContent:'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight:'bold'}}>Account</Text>
        </View>
        <View style={{backgroundColor: '#278eca', height: 170}}/>
        <Image style={{width: 200, height: 200, borderRadius: 200, position: 'absolute', left: 100, top: 125}} source={{uri: 'https://previews.123rf.com/images/cundrawan703/cundrawan7031207/cundrawan703120700008/14519717-dog-avatar-cartoon-character-icon.jpg'}}/>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 30, marginTop: 120}}>Dog</Text>
          <Text style={{fontSize: 20, color: '#159dd3'}}>Mobile developer</Text>
          <Text style={{margin: 40}}>GAU GAU GAU GAU GAU GAU GAU GAU GAU GAU GAU GAU GAU GAU GAU GAU GAU GAU GAU GAU</Text>
          <Button onPress={() => {setLoggedIn(false)}} title='Sign Out' color='#d68a27'/>
        </View>
        
      </SafeAreaView>
    );
    
}
export default Account;