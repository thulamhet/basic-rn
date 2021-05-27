import React from 'react';
import {Button, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {changeAnswer, resetAnswer} from '../redux/action/answerAction';
import {changeUser, resetUser} from '../redux/action/userAction';

const Answers: React.FC<{answers: any; user: any; resetAnswer: Function; resetUser: Function}> = ({
  answers,
  resetAnswer,
  user,
  resetUser,
}) => {
  const navigation = useNavigation();
    return (
    <View>
      <View>
        <Text>Đáp án đã chọn:</Text>
        <Text>survey1 : </Text>
        <Text>{answers.survey1Answer.join(',')}</Text>
        <Text>survey2 : </Text>
        <Text>{answers.survey2Answer.join(',')}</Text>
        <Button
          title='log out'
          onPress={()=> {
            
            resetUser();
            console.log(user)
            
          }}

        />
      </View>
      <Text
        onPress={() => {
          AsyncStorage.removeItem('answers').then(() => {
            resetAnswer();
            navigation.navigate('Survey');
          });
        }}>
        reset answer
      </Text>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  const {answerReducer, userReducer} = state;
  return {answers: answerReducer, user: userReducer};
};

export default connect(mapStateToProps, {resetAnswer: resetAnswer, resetUser: resetUser})(Answers);
