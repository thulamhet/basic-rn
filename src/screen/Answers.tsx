import React, {useContext} from "react";
import {Text, View} from "react-native";
import {AnswerContext} from "../../App";

const Answers: React.FC = () => {
    const context = useContext(AnswerContext);
    const {answers} = context;
    const {survey1Answer, survey2Answer} = answers;
    return (
        <View>
            <Text>
                Đáp án đã chọn:
            </Text>
            <Text>survey1 : </Text>
            <Text>{survey1Answer.join(',')}</Text>
            <Text>survey2 : </Text>
            <Text>{survey2Answer.join(',')}</Text>
        </View>
    )
}

export default Answers;
