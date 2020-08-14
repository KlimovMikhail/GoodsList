/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useCallback } from 'react'

import './App.css'

import { GoodsList } from '../GoodsList/GoodsList'
import { goods as initialGoods } from '../Mocks/GoodsMock'
import { category } from '../Mocks/CategoryMock'
import { GoodsListForm } from '../GoodsListForm/GoodsListForm'
import { addNewItem, removeElementById, getTotal, changeGoodsSelected, selectedItems, changeItem, removeSelectedItems, checkSelected } from '../Utils/goodsUtils'
import { GoodsTotalWeight } from '../GoodsTotalWeight/GoodsTotalWeight'
import { SelectedItemWeigt } from '../SelectedItemWeigt/SelectedItemWeight'

export const App = () => {
  const [goods, setGoods] = useState(initialGoods);
  const [total, setTotal] = useState(getTotal(goods));
  const [totalWeightSelectedItem, setTotalWeightSelectedItem] = useState(0);

  const onAdd = useCallback(
    (newElement) => {
      const newArray = addNewItem(newElement, goods)
      setGoods(newArray)
      setTotal(getTotal(newArray))
    },
    [goods],
  )

  const onSaveItem = useCallback(
    (newElement, id) => {
      const newArr = changeItem(goods, newElement, id)
      const newSelectedArray = selectedItems(newArr)
      setGoods(newArr)
      setTotal(getTotal(newArr))
      setTotalWeightSelectedItem(getTotal(newSelectedArray))
    },
    [goods],
  )

  const onDelete = useCallback(
    (id) => {
      const newArray = removeElementById(id, goods)
      const array = selectedItems(newArray)
      setGoods(newArray)
      setTotal(getTotal(newArray))
      setTotalWeightSelectedItem(getTotal(array))
    },
    [goods],
  )

  const onToggle = useCallback(
    (id) => {
      const arr = changeGoodsSelected(goods, id)
      const selectedItemsArray = selectedItems(arr)
      setGoods(arr)
      setTotalWeightSelectedItem(getTotal(selectedItemsArray))
    },
    [goods],
  )

  const deleteSelected = useCallback(
    () => {
      const selectedArray = removeSelectedItems(goods)
      const array = selectedItems(selectedArray)
      setGoods(selectedArray)
      setTotal(getTotal(selectedArray))
      setTotalWeightSelectedItem(getTotal(array))
    },
    [goods],
  )

  return (
    <div className="Container">
      <div className="Title">Fridge</div>
      <GoodsList onSaveItem={onSaveItem} goods={goods} category={category} onDelete={onDelete} onToggle={onToggle} />
      <GoodsTotalWeight total={total} />
      <SelectedItemWeigt totalWeightSelectedItem={totalWeightSelectedItem} />
      <GoodsListForm category={category} onAdd={onAdd} />
      <button className="deleteSelected" onClick={deleteSelected} disabled={checkSelected(goods)} >Delete Selected</button>
    </div>
  )
}