import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dispatch} from "@reduxjs/toolkit";
import axios from 'axios';

export const GET_ITEM = 'GET_ITEM';

export const getItem = () => (dispatch: Dispatch) => {
  const url = 'https://react-native-server-cuong.herokuapp.com/stores';
  axios.get(url).then(res => {
      dispatch({
        type: GET_ITEM,
        data: res.data,
      });
    })
    .catch(e => {
      console.log(e);
    });
};