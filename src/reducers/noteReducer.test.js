import noteReducer from './noteReducer';

describe('noteReducer', () => {
  it('returns initial state on init action', () => {
    expect(noteReducer(undefined, { type: '@@init' })).toEqual([]);
  });

  it('returns a new state with note on addNote action', () => {
    const action = {
      type: 'ADD_NOTE',
      payload: {
        title: 'My Cool Title',
        body: 'My Coool Body'
      }
    };

    expect(noteReducer(undefined, action)).toEqual([
      {
        title: 'My Cool Title',
        body: 'My Coool Body'
      }
    ]);
  });
});
