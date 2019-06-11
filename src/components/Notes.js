import React from 'react';
import PropTypes from 'prop-types';

export default function Notes({ notes }) {
  const notesList = notes.map(note => (
    <li key={note._id}>
      {note.title}: {note.body}
    </li>
  ));
  
  return (
    <ul>
      {notesList}
    </ul>
  );
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired
};
