import {CHANGE_ANSWER} from "../action/answerAction";

const initialValue = {
    survey1Answer: [],
    survey2Answer: [],
};

export default function answerReducer(state = initialValue, action: any) {
    switch (action.type) {
        case CHANGE_ANSWER:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}
