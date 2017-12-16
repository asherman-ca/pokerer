import React from 'react';

const PlayerIndexItem = () => {
  let earnings = Math.floor(Math.random() * 250 + 1);
  // earnings = Math.floor(earnings);
  earnings = Math.ceil(earnings / 10) * 10;

  return (
    <div className="player-index-item">
      <i className="fas fa-home fa-3x" />
      <div className="take">
        <div className="player-index-item-location">
          <div className="player-index-item-location-name">Kelly's Spot</div>
          <div className="player-index-item-location-date">12/01/2017</div>
        </div>
        <div className="earnings">+ {earnings}</div>
      </div>
    </div>
  );
};

export default PlayerIndexItem;
