import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import count1 from './HomeScreen';
import {state} from './HomeScreen';

const gray = '#DDDDDD';

export let a = 3;

type BoxType = {
    question: string;
    numberCheck: number;
}
const CustomBox: React.FC<BoxType> = ({question, numberCheck}) => {
  const a = count1;
  const [count, setCount] = useState(1);
  const [color, setColor] = useState(gray);
  const onPress = () => {
    // count === 1 ? setCount(prevCount => prevCount + 1) : setCount(prevCount => prevCount - 1)
    // setColor('black');
    if (color == gray) {
      setCount(prevCount => prevCount + 1);
      setColor('black');
      numberCheck++;
      state.c++;
    } else {
      setCount(prevCount => prevCount - 1);
      setColor(gray);
      numberCheck--;
      state.c--;
    }
    state.check = state.c > 1 ? true : false;
  };


  console.log(state.c);
  console.log(state.check);
  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={{backgroundColor: `${color}` , height: 28, width: 28,borderColor: 'black',borderWidth: 3, marginRight: 10}}
        onPress={onPress}
      >
      </TouchableOpacity>
        <Text style={styles.question}>{question}</Text>

    </View>
  );
};

  const styles = StyleSheet.create({
    container: {
      margin: 30,
      paddingHorizontal: 10,
      flexDirection: 'row',
    },
   
    question: {
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

export default CustomBox;