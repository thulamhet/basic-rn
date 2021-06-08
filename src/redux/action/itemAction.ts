import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dispatch} from "@reduxjs/toolkit";
import axios from 'axios';
import { useDispatch } from 'react-redux';

const url = 'https://60b0a7c81f26610017ffed12.mockapi.io/api/food';
export const GET_ITEM = 'GET_ITEM';
export const CHANGE_ITEM = 'ADD_ITEM';


export const getItem = () => (dispatch: Dispatch) => {
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

export const changeItem = (data: any) => (dispatch: Dispatch) => {
  axios.post(url, {
    name: data?.name,
    price: data?.price,
    url: data?.url,
  });
  // dispatch(getItem())
  dispatch({
    type: CHANGE_ITEM,
    payload: data,
  })
}