/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { GoodsListElement } from '../GoodsListElement/GoodsListElement'
import PropTypes from 'prop-types';

export const GoodsList = () => {
  const goods = useSelector(state => state.goodsReducer.goods, shallowEqual)
  return (
    <div>
      {Array.isArray(goods) && goods.map((good) => {
        return (
          <GoodsListElement
            good={good}
            key={good.id}
          />
        )
      })}
    </div>
  )
}

GoodsList.defaultProps = {
  goods: [],
  category: []
}

GoodsList.propTypes = {
  goods: PropTypes.array,
  category: PropTypes.array,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
  onSaveItem: PropTypes.func,
}