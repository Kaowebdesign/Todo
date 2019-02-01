import { ADD_TASK } from '../constants';
import { TOGGLE_TASK } from '../constants';
import { DELETE_TASK } from '../constants';

const initialState = [];

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return [...state, { id: action.payload.id, title: action.payload.title, status: action.payload.status, color: action.payload.color }];
        case TOGGLE_TASK:
            return state.map(
                todo =>
                todo.id === action.payload.id ? {...todo, complete: !todo.complete } :
                todo

            );
        case DELETE_TASK:
            return state = state.filter(todo => todo.id !== action.payload.id)
        default:
            return state;
    }
};