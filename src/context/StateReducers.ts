import { reducerCases } from "../utils/constants";
import { Action, State } from "../types/context/state-context.types";

export const initialState = {
    toast: {},
};

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case reducerCases.SHOW_TOAST:
            return {
                ...state,
                toast: {
                    type: action.payload.type,
                    title: action.payload.title,
                    message: action.payload.message
                }
            };

        case reducerCases.HIDE_TOAST: {
            return {
                ...state,
                toast: {
                    type: '',
                    title: '',
                    message: ''
                }
            }
        }

        default:
            return state;
    }
};
export default reducer;
