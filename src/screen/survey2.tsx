import React, {useState, useContext} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const data = [
  '1. dưới 10 triệu',
  '2. 10 - 20 triệu',
  '3. 20 - 100 triệu',
  '5. Trên 100 triệu',
];

const Survey2: React.FC = () => {
  const navigation = useNavigation();
  const handleCheckBox = (arrange: number) => {
    // const isChecked = survey2Answer.find(item => item === data[arrange]);
    // let updatedAnswer = {};
    // if (!isChecked) {
    //   //option not chosen
    //   const array = [...survey2Answer, data[arrange]];
    //   updatedAnswer = {...answers, survey2Answer: array};
    // } else {
    //   updatedAnswer = {
    //     ...answers,
    //     survey2Answer: survey2Answer.filter(item => item != data[arrange]),
    //   };
    // }
    // AsyncStorage.setItem('answers', JSON.stringify(updatedAnswer)).then(() => {
    //   setAnswers(updatedAnswer);
    // });
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{textAlign: 'center'}}>Câu 1:</Text>
      <Text>thu nhập của quý khách:</Text>
      <View>
        {data.map((item, index) => {
          // const isChecked = survey2Answer.find(item => item === data[index]);
          const isChecked = false;
          return (
            <View
              key={index}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => handleCheckBox(index)}
                style={{
                  width: 30,
                  height: 30,
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {isChecked && <Text>V</Text>}
              </TouchableOpacity>
              <Text>{item}</Text>
            </View>
          );
        })}
      </View>
      <View>
        <Button
          title="Prev"
          color="yellow"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Next"
          color="green"
          onPress={() =>
            navigation.navigate('Answers')
          }
        />
      </View>
    </View>
  );
};

export default Survey2;
