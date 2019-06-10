import noteReducer from './noteReducer';
import { addNote } from '../components/actions/noteActions';

describe('noteReducer', () => {
  it('returns initial state on init action', () => {
    expect(noteReducer(undefined, { type: '@@init' })).toEqual([]);
  });

  it('returns a new state with note on addNote action', () => {
    const note = {
      title: 'My Cool Title',
      body: 'My Coool Body'
    };

    expect(noteReducer(undefined, addNote(note))).toEqual([
      {
        title: 'My Cool Title',
        body: 'My Coool Body'
      }
    ]);
  });
});
