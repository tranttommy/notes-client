import { ADD_NOTE, SET_NOTES, ADD_NOTE_PENDING, SET_NOTES_PENDING } from '../actions/noteActions';

const initialState = {
  loading: false,
  list: []
};
export default function noteReducer(state = initialState, action) {
  console.log(action.payload);
  return {
    [ADD_NOTE]: { loading: false, list: [...state.list, action.payload] },
    [ADD_NOTE_PENDING]: { ...state, loading: true },
    [SET_NOTES]: { loading: false, list: action.payload },
    [SET_NOTES_PENDING]: { ...state, loading: true }
  }[action.type] || state;
}
