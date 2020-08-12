import React from 'react';
import './GoodsTotalWeight.css';
import PropTypes from 'prop-types';

export const GoodsTotalWeight = ({ total }) => {
  return (
    <div className="Total">
      <div className="Total_Title" >Total Weidht:</div>
      <div className="Total_Weight" >{total}</div>
    </div>
  );
}

GoodsTotalWeight.propTypes = {
  total: PropTypes.number,
};
