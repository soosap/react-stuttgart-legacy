import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends React.Component {
    static contextTypes = {
      router: PropTypes.object,
    };

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/auth/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state, ownProps) => ({
    // Pick pieces of application state needed by <Header /> component
    authenticated: state.auth.authenticated,
  });

  return connect(mapStateToProps)(Authentication);
}
