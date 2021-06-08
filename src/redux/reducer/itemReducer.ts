import {CHANGE_ITEM, GET_ITEM} from "../action/itemAction";

const initialValue = {
  items: [],
};

export default function itemReducer(state = initialValue, action: any) {
    switch (action.type) {
        case GET_ITEM:
          return {
            items: action.data
          }
        case CHANGE_ITEM:
          return action.payload
        default:
            return state;
    }
}