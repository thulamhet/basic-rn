import * as React from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';
import CustomBox from './customBox';

export let count1 : number = 1;

const Home: React.FC<{navigation: any}> = ({navigation}) => {
    
    return (
        <View >
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 20}}>4. Thời gian chờ của quý khác đối với mỗi dịch vụ là</Text>
            <CustomBox question='1. Lâu' numberCheck={count1}/>
            <CustomBox question='2. Rất lâu' numberCheck={count1}/>
            <CustomBox question='3. Rất rất lâu' numberCheck={count1}/>
            <CustomBox question='4. Quá lâu' numberCheck={count1}/>
            <CustomBox question='5. Vẫn lâu như ở số 5' numberCheck={count1}/>   
            <TouchableOpacity  style={{width: 50, height: 50, marginLeft: 200, backgroundColor: 'black'}} onPress={() => navigation.navigate('trang5')}>
                <Text style={{color: 'white', justifyContent: 'center', alignItems:'center', margin: 10}}>Next</Text>
            </TouchableOpacity>              
        </View>
    );
    
}
export default Home;