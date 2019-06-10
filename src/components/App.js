import React from 'react';
import NoteForm from './NoteForm';

export default function App() {
  return (
    <NoteForm onSubmit={note => console.log(note)} />
  );
}
