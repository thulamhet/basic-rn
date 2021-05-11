import * as React from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';
import CustomBox from './customBox';

export let count1 : number = 1;

const Home: React.FC<{navigation: any}> = ({navigation}) => {
    
    return (
        <View >
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 20}}>2. Tại sao quý khách hàng lựa chọn sử dụng dịch vụ của Bảo Sơn Paradise</Text>
            <CustomBox question='1. Dịch vụ tốt' numberCheck={count1}/>
            <CustomBox question='2. Địa điểm thuận tiện' numberCheck={count1}/>
            <CustomBox question='3. Giá cả hợp lý' numberCheck={count1}/>
            <CustomBox question='4. Nhân viên chuyên nghiệp' numberCheck={count1}/>
            <TouchableOpacity  style={{width: 50, height: 50, marginLeft: 200, backgroundColor: 'black'}} onPress={() => navigation.navigate('trang3')}>
                <Text style={{color: 'white', justifyContent: 'center', alignItems:'center', margin: 10}}>Next</Text>
            </TouchableOpacity>              
        </View>
    );
    
}
export default Home;