import { addNote } from './noteActions';

describe('noteActions', () => {
  it('creates an addNote action', () => {
    expect(addNote({
      title: 'My Cool Title',
      body: 'My Cool Body'
    })).toEqual({
      type: 'ADD_NOTE',
      payload: {
        title: 'My Cool Title',
        body: 'My Cool Body'
      }
    });
  });
});
