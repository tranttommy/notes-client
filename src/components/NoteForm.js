import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class NoteForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: '',
    body: ''
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value })

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      title: '',
      body: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" value={this.state.title} onChange={this.handleChange} />
        <input name="body" value={this.state.body} onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}
