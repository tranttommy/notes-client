import { postNote } from '../../../services/notes-api';

export const ADD_NOTE = 'ADD_NOTE';
export const addNote = note => ({
  type: ADD_NOTE,
  payload: postNote(note)
});
