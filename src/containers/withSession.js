import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { login } from '../services/auth0';
import { connect } from 'react-redux';
import { getToken } from '../selectors/sessionSelectors';

export const withSession = Component => {
  class WithSession extends PureComponent {
    static propTypes = {
      token: PropTypes.string.isRequired
    }

    componentDidMount() {
      !this.props.token && login();
    }

    render() {
      if(!this.props.token) return <>Not Logged In</>;
      return <Component />;
    }
  }
  
  const mapeStateToProps = state => ({
    token: getToken(state)
  });

  return connect(
    mapeStateToProps
  )(WithSession);
};
