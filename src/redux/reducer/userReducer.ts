import { CHANGE_USER, RESET_USER } from "../action/userAction";

const initialValue = {
  username: '',
  password: '',
};

export default function userReducer (state = initialValue, action: any) {
  console.log('-----')
  console.log(action)
  console.log('-')
  switch(action.type) {
    case CHANGE_USER:
      return action.payload;
    case RESET_USER:
      return initialValue;
    default: 
      return state;
  }
}