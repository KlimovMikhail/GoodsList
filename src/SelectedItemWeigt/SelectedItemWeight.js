/* eslint-disable no-unused-vars */
import React from 'react';
import './SelectedItemWeight.css';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux'


export const SelectedItemWeigt = () => {
  const totalWeightSelectedItem = useSelector(state => state.goodsReducer.totalWeightSelectedItem, shallowEqual)
  return (
    <div className="SubTotal">
      <div className="SubTotal_Title" >Selected Total Weidht:</div>
      <div className="SubTotal_Weight" >{totalWeightSelectedItem}</div>
    </div>
  );
};

SelectedItemWeigt.propTypes = {
  totalWeightSelectedItem: PropTypes.number,
};
