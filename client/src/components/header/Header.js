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
    console.log(this.props);

    const title = <Link to={'/'}>Pokerer</Link>;

    return (
      <div>
        <AppBar
          title={title}
          showMenuIconButton={false}
          iconElementRight={this.props.auth ? <DropDown /> : <LoggedOut />}
          titleStyle={{ fontFamily: 'Spectral SC, serif' }}
        />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, null)(Header);
