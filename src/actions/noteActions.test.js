import { addNote } from './noteActions';

jest.mock('../services/note-attendant-api.js', () => ({
  postNote() {
    return Promise.resolve({});
  },
  getNotes() {
    return Promise.resolve({});
  }
}));
  
describe('noteActions', () => {
  it('creates an addNote action', () => {
    expect(addNote({
      title: 'My Cool Title',
      body: 'My Cool Body'
    })).toEqual({
      type: 'ADD_NOTE',
      payload: expect.any(Promise)
    });
  });
});
