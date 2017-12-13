import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class RecordIndex extends Component {
  render() {
    return (
      <div className="record-index">
        <div className="record-index-left">
          <h1>Record Index</h1>
        </div>

        <div className="record-index-right">
          <h1>User</h1>
        </div>
      </div>
    );
  }
}

export default RecordIndex;
