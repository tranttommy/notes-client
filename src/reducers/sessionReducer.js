import { SET_SESSION } from '../actions/sesssionActions';

const initialState = {
  username: '',
  token: '',
  image: ''
};

export default function sessionReducer(state = initialState, action) {
  return {
    [SET_SESSION]: action.payload
  }[action.type] || state;
}
