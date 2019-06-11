import { selectNotes } from './noteSelectors';

describe('noteSelectors', () => {
  it('gets notes from state', () => {
    const state = {
      notes: ['hi']
    };
    
    expect(selectNotes(state)).toEqual(['hi']);
  });
});
