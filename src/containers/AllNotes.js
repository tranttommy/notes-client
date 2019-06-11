import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notes from '../components/Notes';
import { selectNotes, selectNotesLoading } from '../selectors/noteSelectors';
import { setNotes } from '../actions/noteActions';

class AllNotes extends PureComponent {
  static propTypes = {
    notes: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    if(this.props.loading) return <h1>Loading!!!!!</h1>;

    return (
      <Notes notes={this.props.notes} />
    );
  }
}

const mapStateToProps = state => ({
  notes: selectNotes(state),
  loading: selectNotesLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(setNotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllNotes);
