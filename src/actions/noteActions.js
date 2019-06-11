import { createAction } from 'promise-middleware-redux';
import { postNote, getNotes } from '../services/note-attendant-api';

export const [
  addNote,
  ADD_NOTE,
  ADD_NOTE_PENDING
] = createAction('ADD_NOTE', postNote);

export const [
  setNotes,
  SET_NOTES,
  SET_NOTES_PENDING
] = createAction('SET_NOTES', getNotes);
