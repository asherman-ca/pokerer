import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    // makes sure we don't flash content while waiting for prop delivery
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <ul className="right">
            <li>
              <a className="nav-auth" href="/auth/google">
                Login
              </a>
            </li>
          </ul>
        );
      default:
        return (
          <ul className="right">
            <li>
              <Link className="nav-auth" to={'/records/form'}>
                Form
              </Link>
            </li>
            <li>
              <a className="nav-auth" href="/api/logout">
                Logout
              </a>
            </li>
          </ul>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper" style={{ backgroundColor: '#295D29' }}>
          <ul className="left">
            <Link
              to={this.props.auth ? '/records' : '/'}
              className="brand-logo pokerer"
            >
              Pokerer
            </Link>
          </ul>
          {this.renderContent()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, null)(Header);
