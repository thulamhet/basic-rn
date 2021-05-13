import React, {useState, useContext} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AnswerContext} from "../../App";

const data = [
    '1. dưới 10 triệu',
    '2. 10 - 20 triệu',
    '3. 20 - 100 triệu',
    '5. Trên 100 triệu',
];

const Survey2: React.FC = () => {
    const navigation = useNavigation();
    const context = useContext(AnswerContext);
    const {answers} = context;
    const {survey2Answer} = answers;
    const {setAnswers} = context;
    const handleCheckBox = (arrange: number) => {
        const isChecked = survey2Answer.find(item => item === data[arrange]);
        if (!isChecked) {
            //option not chosen
            const array = [...survey2Answer, data[arrange]];
            setAnswers({...answers, survey2Answer: array});
        } else {
            //option was chosen
            setAnswers({
                ...answers,
                survey2Answer: answers => answers.filter(item => item != data[arrange]),
            });
        }
    };

    return (
        <View style={{flex: 1}}>
            <Text style={{textAlign: 'center'}}>Câu 1:</Text>
            <Text>thu nhập của quý khách:</Text>
            <View>
                {data.map((item, index) => {
                    const isChecked = survey2Answer.find(item => item === data[index]);
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
                <Button title="Next" color="green" onPress={() => navigation.navigate('Answers', {
                    survey2Answer,
                    survey2Answer: answers
                })} />
            </View>
        </View>
    );
};

export default Survey2;
