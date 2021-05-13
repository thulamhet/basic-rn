import React from "react";
import {Text, View} from "react-native";
import {AnswerContext} from "../../App";

const Answers: React.FC = () => {
    return (
        <AnswerContext.Consumer>
            {
                value => {
                    const {answers} = value;
                    const {survey1Answer, survey2Answer} = answers;
                    return <View>
                        <Text>
                            Đáp án đã chọn:
                        </Text>
                        <Text>survey1 : </Text>
                        <Text>{survey1Answer.join(',')}</Text>
                        <Text>survey2 : </Text>
                        <Text>{survey2Answer.join(',')}</Text>
                    </View>
                }
            }

        </AnswerContext.Consumer>

    )
}

export default Answers;
