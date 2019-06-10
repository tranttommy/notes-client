import { postNote } from '../services/note-attendant-api';

export const ADD_NOTE = 'ADD_NOTE';
export const addNote = note => ({
  type: ADD_NOTE,
  payload: postNote(note)
});
