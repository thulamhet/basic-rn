import React from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Answers: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View>
        <Text>Đáp án đã chọn:</Text>
        <Text>survey1 : </Text>
        {/*<Text>{survey1Answer.join(',')}</Text>*/}
        <Text>survey2 : </Text>
        {/*<Text>{survey2Answer.join(',')}</Text>*/}
      </View>
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
