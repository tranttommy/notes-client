import { ADD_NOTE } from '../components/actions/noteActions';

const initialState = [];
export default function noteReducer(state = initialState, action) {
  return {
    [ADD_NOTE]: [...state, action.payload]
  }[action.type] || state;
}
