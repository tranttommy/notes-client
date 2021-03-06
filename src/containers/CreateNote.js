import { connect } from 'react-redux';
import NoteForm from '../components/NoteForm';
import { addNote } from '../actions/noteActions';

const mapDispatchToProps = dispatch => ({
  onSubmit(note) {
    dispatch(addNote(note));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(NoteForm);
