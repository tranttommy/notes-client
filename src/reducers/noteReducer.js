import { ADD_NOTE } from '../actions/noteActions';

const initialState = [];
export default function noteReducer(state = initialState, action) {
  return {
    [ADD_NOTE]: [...state, action.payload]
  }[action.type] || state;
}
