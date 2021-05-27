import {combineReducers} from 'redux';

import answerReducer from "./answerReducer";
import userReducer from './userReducer';

export default combineReducers({answerReducer, userReducer});
