/* eslint-disable no-unused-vars */
import React from 'react'
import { GoodsListElement } from '../GoodsListElement/GoodsListElement'
import PropTypes from 'prop-types';

export const GoodsList = ({ goods, category, onDelete, onSaveItem, onToggle }) => {

  return (
    <div>
      {Array.isArray(goods) && goods.map((good) => {
        return (
          <GoodsListElement
            category={category}
            good={good}
            key={good.id}
            onDelete={onDelete}
            onToggle={onToggle}
            onSaveItem={onSaveItem}
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