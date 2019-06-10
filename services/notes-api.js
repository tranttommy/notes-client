export function postNote(note) {
  return Promise.resolve({
    ...note,
    _id: 1234567890
  });
}
