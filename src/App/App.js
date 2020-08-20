/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'

import './App.css'

import { GoodsList } from '../GoodsList/GoodsList'
import { GoodsListForm } from '../GoodsListForm/GoodsListForm'
import { GoodsTotalWeight } from '../GoodsTotalWeight/GoodsTotalWeight'
import { SelectedItemWeigt } from '../SelectedItemWeigt/SelectedItemWeight'

export const App = () => {

  return (
    <div className="Container">
      <div className="Title">Fridge</div>
      <GoodsList />
      <GoodsTotalWeight />
      <SelectedItemWeigt />
      <GoodsListForm />
    </div>
  )
}