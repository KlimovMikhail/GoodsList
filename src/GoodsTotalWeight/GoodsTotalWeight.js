/* eslint-disable no-unused-vars */
import React from 'react';
import './GoodsTotalWeight.css';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux'

export const GoodsTotalWeight = () => {
  const total = useSelector(state => state.goodsReducer.total, shallowEqual)

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
