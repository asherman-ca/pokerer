import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import DropDown from './DropDown';
import LoggedOut from './LoggedOut';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const title = (
      <div>
        <i
          style={{ marginRight: '10px' }}
          className="fas fa-trophy"
          aria-hidden="true"
        />
        | <Link to={this.props.auth ? '/records' : '/'}>Pokerer</Link>
      </div>
    );

    return (
      <div>
        <AppBar
          title={title}
          showMenuIconButton={false}
          iconElementRight={this.props.auth ? <DropDown /> : <LoggedOut />}
          titleStyle={{ fontFamily: 'Spectral SC, serif' }}
          style={{ padding: '0% 15%' }}
        />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, null)(Header);
