import * as React from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';
import CustomBox from './customBox';

export let count1 : number = 1;

const Home: React.FC<{navigation: any}> = ({navigation}) => {
    
    return (
        <View >
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 20}}>5. Để đánh giá tổng quát chất lượng dịch vụ của Bảo Sơn Paradise thì Quý khách sẽ đánh giá là:</Text>
            <CustomBox question='1. Hài lòng' numberCheck={count1}/>
            <CustomBox question='2. Tạm được' numberCheck={count1}/>
            <CustomBox question='3. Hài lòng tạm được' numberCheck={count1}/>
            <CustomBox question='4. Tạm hài lòng' numberCheck={count1}/>
            <CustomBox question='5. Như shit' numberCheck={count1}/>   
            <TouchableOpacity  style={{width: 50, height: 50, marginLeft: 200, backgroundColor: 'black'}} onPress={() => navigation.navigate('Home')}>
                <Text style={{color: 'white', justifyContent: 'center', alignItems:'center', margin: 10}}>Next</Text>
            </TouchableOpacity>              
        </View>
    );
    
}
export default Home;