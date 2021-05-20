import React from 'react';
import {Text, View} from 'react-native';
import {AnswerContext} from '../AppNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Answers: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <AnswerContext.Consumer>
        {value => {
          const {answers} = value;
          const {survey1Answer, survey2Answer} = answers;
          return (
            <View>
              <Text>Đáp án đã chọn:</Text>
              <Text>survey1 : </Text>
              <Text>{survey1Answer.join(',')}</Text>
              <Text>survey2 : </Text>
              <Text>{survey2Answer.join(',')}</Text>
            </View>
          );
        }}
      </AnswerContext.Consumer>
      <Text
        onPress={() => {
          AsyncStorage.removeItem('answers').then(() => {
            navigation.navigate('Survey');
          });
        }}>
        reset answer
      </Text>
    </View>
  );
};

export default Answers;
