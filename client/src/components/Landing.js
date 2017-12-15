import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../actions';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location.pathname === '/' && newProps.auth) {
      this.props.history.push('/records');
    }
  }

  render() {
    return (
      <div className="landing">
        <h1 style={{ marginBottom: '40px' }}>Welcome to Pokerer</h1>
        <img src="http://classicplayingcards.com/img/cards/hand1.png" />
        <a href="/auth/google">
          <RaisedButton
            label="Login with Google"
            labelPosition="before"
            primary={true}
            icon={<i className="fab fa-google-plus-g" />}
          />
        </a>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  console.log(auth);
  return { auth };
}

export default connect(mapStateToProps, actions)(withRouter(Landing));
