// react + router setup

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './header/Header';
import Landing from './Landing';
import RecordForm from './RecordForm';
import RecordIndex from './RecordIndex';

// const Header = () => <h2>Header</h2>;
const Dashboard = () => (
  <div style={{ textAlign: 'center' }}>
    <h2>Dashboard</h2>
  </div>
);
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="foundation">
          <Header />
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/records" component={RecordIndex} />
            <Route path="/records/form" component={RecordForm} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
