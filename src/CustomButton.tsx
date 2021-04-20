import React from 'react';
import {View, Text} from 'react-native';

type ButtonType = {
    label: string;
    colorCode: string;
};

const CustomButton: React.FC<ButtonType> = ({label, colorCode}) => {
    return (
        <View
            style={{
                height: 60,
                borderRadius: 10,
                marginVertical: 10,
                backgroundColor: colorCode,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>{label}</Text>
        </View>
    );
};

export default CustomButton;
