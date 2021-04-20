/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import CustomInput from "./src/CustomInput";
import CustomButton from "./src/CustomButton";

export const orangeColor = '#E7421B';

const App = () => {
    const InputList = [
        {
            title: 'Name',
            placeholder: 'John Doe',
        },
        {
            title: 'Mail',
            placeholder: 'adb@gmail.com',
            isEmail: true
        },
        {
            title: 'Password',
            placeholder: '*****'
        },
        {
            title: 'RetypePassword',
            placeholder: '*****'
        }
    ];

    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            <View style={{marginTop: 50}}>
                <Text
                    style={{
                        textAlign: 'center',
                        color: orangeColor,
                        fontSize: 22,
                        fontWeight: 'bold',
                    }}>
                    Join Active Ecommerce
                </Text>
                <View style={{ margin: 20}}>
                    {
                        InputList.map((input, index) => (
                            <CustomInput key={index} label={input.title} placeholder={input.placeholder} isEmail={input.isEmail}/>
                        ))
                    }
                    <CustomButton label={'SignUp'} colorCode={orangeColor}/>
                    <CustomButton label={'Login'} colorCode={'#F8B55D'}/>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default App;
