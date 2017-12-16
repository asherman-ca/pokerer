import React from 'react';
import { keys, values } from 'lodash';
import { sortData } from '../../helpers/records';
import { playerParser } from './playerParser.json';

const RecordIndexItem = props => {
  let takes = sortData(props.record.take);

  let playerName = takes[0]
    .split('')
    .map(char => (char === '_' ? ' ' : char))
    .join('');

  return (
    <div className="record-index-item">
      <div className="record-index-item-title">
        <div className="title-winner">Game Winner: {playerName}</div>
        <div className="title-location">{props.record.location} 12/01/2017</div>
      </div>
      <img
        className="headshot-image"
        src={`/images/${playerParser[takes[0]]}.jpg`}
      />
      <div className="record-container">
        {takes.map(name => {
          return (
            <div keys={Math.random()} className="record-container-item">
              <div className="record-container-item-name">{name}</div>
              <div className="record-container-item-take">
                {props.record.take[name]}
              </div>
            </div>
          );
        })}
      </div>
      <div className="chat-container">
        <div>Add a comment</div>
        <i className="fas fa-ellipsis-h" />
      </div>
    </div>
  );
};

export default RecordIndexItem;
