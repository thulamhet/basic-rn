import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {orangeColor} from '../App';

type CustomInputProps = {
  label: string;
  placeholder: string;
  isEmail?: boolean;
  value?: string;
};

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  isEmail,
  value,
}) => {
  return (
    <View style={{marginVertical: 5}}>
      <Text style={{color: orangeColor, fontWeight: 'bold'}}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        style={{
          borderWidth: 0.5,
          borderColor: '#D0D0D0',
          padding: 10,
          borderRadius: 5,
        }}
      />
      {isEmail && (
        <Text
          style={{
            textAlign: 'right',
            color: orangeColor,
            textDecorationLine: 'underline',
          }}>
          Register with phone number
        </Text>
      )}
    </View>
  );
};

export default CustomInput;
