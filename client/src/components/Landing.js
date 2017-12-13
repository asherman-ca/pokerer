import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const Landing = () => {
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
};

export default Landing;
