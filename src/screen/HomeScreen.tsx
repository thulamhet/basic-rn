import * as React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import {  View, Text, TouchableOpacity, SafeAreaView, Button, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AnswerContext } from '../../App';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home: React.FC<{navigation: any}> = ({navigation}) => {
    const context = useContext(AnswerContext);
    const {isLoggedIn, setLoggedIn} = context;
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 160}}>Sign in</Text>
          <View style={{margin: 20}}>
            <Text>Email ID</Text>
            <TextInput onChangeText={setEmail} style={{marginTop: 10, borderWidth: 0.6, borderRadius: 8, marginBottom: 20}} placeholder='Enter your email here'/>
            <Text>Password</Text>
            <TextInput secureTextEntry={true} onChangeText={setPassword} style={{marginBottom: 20,marginTop: 10, borderWidth: 0.6, borderRadius: 8}} placeholder='Enter your password here'/>
            <Button 
              disabled={Email=="" || Password==""}
              title='Sign In'
              color='#d68a27'
              onPress={() => {
                setLoggedIn(true);
              }}
            />
          </View>
        </SafeAreaView>
    );
}
export default Home;