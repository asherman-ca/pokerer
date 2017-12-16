import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { keys, values } from 'lodash';

import RecordIndexItem from './RecordIndexItem';
import PlayerIndexItem from './PlayerIndexItem';

class RecordIndex extends Component {
  render() {
    return (
      <div className="record-index">
        <div className="record-index-container">
          <div className="record-index-left">
            {values(this.props.records).map(record => {
              return <RecordIndexItem record={record} />;
            })}
          </div>
          <div className="record-index-right">
            <div className="record-index-top">
              <i className="fas fa-user-circle fa-3x" />
              <div className="user-info">
                <div style={{ fontWeight: 'bold' }}>User Fullname</div>
                <div>User Email</div>
              </div>
            </div>
            <div className="user-info-logs">
              <div className="user-info-logs-title">
                <div style={{ color: '#999999' }}>Recent Games</div>
                <div>Add Game</div>
              </div>
              <div className="game-list">
                {keys(this.props.records).map(key => {
                  return <PlayerIndexItem />;
                })}
                {keys(this.props.records).map(key => {
                  return <PlayerIndexItem />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ records, auth }) {
  return { records, auth };
}

export default connect(mapStateToProps, null)(RecordIndex);
