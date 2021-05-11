import * as React from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';
import CustomBox from './customBox';

export let count1 : number = 1;

const Home: React.FC<{navigation: any}> = ({navigation}) => {
    
    return (
        <View >
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 20}}>2. Quý khách biết Bảo Sơn Paradise qua phương tiện thông tin nào</Text>
            <CustomBox question='1. Internet' numberCheck={count1}/>
            <CustomBox question='2. Báo chí, tạp chí' numberCheck={count1}/>
            <CustomBox question='3. Tivi' numberCheck={count1}/>
            <CustomBox question='4. Gia đình bạn bè' numberCheck={count1}/>
            <CustomBox question='5. Website: www.baosonparadise.vn' numberCheck={count1}/>   
            <TouchableOpacity  style={{width: 50, height: 50, marginLeft: 200, backgroundColor: 'black'}} onPress={() => navigation.navigate('trang2')}>
                <Text style={{color: 'white', justifyContent: 'center', alignItems:'center', margin: 10}}>Next</Text>
            </TouchableOpacity>              
        </View>
    );
    
}
export default Home;