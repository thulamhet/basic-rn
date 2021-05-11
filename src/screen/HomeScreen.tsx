import * as React from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';
import CustomBox from './customBox';

let count1 : number = 1;
export let state = {
    c : 1 as number,
    check : false as boolean
}


const Home: React.FC<{navigation: any}> = ({navigation}) => {
    return (
        <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 20}}>1. Độ tuổi của quý khách</Text>
            <CustomBox question='1. Từ 1 - 30 tuổi' numberCheck={count1}/>
            <CustomBox question='2. Từ 31 - 40 tuổi' numberCheck={count1}/>
            <CustomBox question='3. Từ 41 - 50 tuổi' numberCheck={count1}/>
            <CustomBox question='4. Từ 51 - 60 tuổi' numberCheck={count1}/>
            <CustomBox question='5. Trên 60 tuổi' numberCheck={count1}/>   
            <TouchableOpacity  disabled={state.check} style={{width: 50, height: 50, marginLeft: 200, marginBottom: 10, backgroundColor: 'black'}} onPress={() => navigation.navigate('trang1')}>
                <Text style={{color: 'white', justifyContent: 'center', alignItems:'center', margin: 10}}>Next</Text>
            </TouchableOpacity>              
        </View>
    );
    
}
export default Home;