import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dispatch} from "@reduxjs/toolkit";

export const CHANGE_USER = 'CHANGE_USER';
export const RESET_USER = 'RESET_USER';

export const changeUser = (data: any) => (dispatch: Dispatch) => {
  AsyncStorage.setItem('user', JSON.stringify(data)).then(() => {
    dispatch({
      type: CHANGE_USER,
      payload: data,
    })
  });
};

export const resetUser = () => ({
  type: RESET_USER,
});