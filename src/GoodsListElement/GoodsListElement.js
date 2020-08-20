/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import './GoodsListElement.css'
import { getCategory } from '../Utils/categoryUtils'
import * as goodsAction from '../actions/goodsActions'
import { category } from '../Mocks/CategoryMock'
import PropTypes from 'prop-types';

export const GoodsListElement = ({ good }) => {
  const { title, weight, description, categoryName } = good
  const [inputChange, setInputChange] = useState({
    isEditing: false,
    title: "",
    weight: "",
    description: "",
    categoryName: "",
    disabled: true
  })

  const dispatch = useDispatch()

  const onDelete = useCallback(() => {
      dispatch(goodsAction.deleteItem(good.id))
    }, [dispatch, good.id])

  const onToggle = useCallback(() => {
      dispatch(goodsAction.toggleItem(good.id))
    }, [dispatch, good.id])

  const onInputChange = ({ target }) => {
    setInputChange({
      ...inputChange,
      [target.name]: target.value
    })
  }

  const onEditItem = () => {
    setInputChange({
      isEditing: true,
      title: title,
      weight: weight,
      categoryName: categoryName,
      description: description,
      disabled: false
    })
  }

  const onSaveChangedItem = () => {
    dispatch(goodsAction.saveItem(inputChange, good.id))
    setInputChange({
      ...inputChange,
      isEditing: false,
      disabled: true
    })
  }

  const inputTitle = <input
    onChange={onInputChange}
    name="title"
    className="GoodsListElement_Column GoodsListElement_Column_Title"
    defaultValue={title}
  />
  const inputWeight = <input
    onChange={onInputChange}
    name="weight"
    className="GoodsListElement_Column GoodsListElement_Column_Weight"
    defaultValue={weight}
  />
  const inputDescription = <input
    onChange={onInputChange}
    name="description"
    className="GoodsListElement_Column GoodsListElement_Column_Description"
    defaultValue={description}
  />
  const choseCategory = <select
    onChange={onInputChange}
    name="categoryName"
    className="GoodsListElement_Column GoodsListElement_Column_Category"
    defaultValue={categoryName}>
    <option value="0" >Chose category</option>
    {category.map((item) => <option key={item.id} value={item.categoryName}> {item.categoryName} </option>)}
  </select>

  return (
    <div className="GoodsListElement">
      <input name="title" type="checkbox" onClick={onToggle} />
      {inputChange.isEditing ? inputTitle : <div className="GoodsListElement_Column GoodsListElement_Column_Title">{title}</div>}
      {inputChange.isEditing ? inputWeight : <div className="GoodsListElement_Column GoodsListElement_Column_Weight">{weight}</div>}
      {inputChange.isEditing ? inputDescription : <div className="GoodsListElement_Column GoodsListElement_Column_Description">{description}</div>}
      {inputChange.isEditing ? choseCategory : <div className="GoodsListElement_Column GoodsListElement_Column_Category">{getCategory(categoryName)}</div>}

      <div className="GoodsListElement_Column GoodsListElement_Button">
        <button onClick={onEditItem}>Edit</button>
      </div>
      <div className="GoodsListElement_Column GoodsListElement_Button">
        <button onClick={onSaveChangedItem} disabled={inputChange.disabled} >Save</button>
      </div>
      <div className="GoodsListElement_Column GoodsListElement_Button">
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

GoodsListElement.propTypes = {
  onSaveItem: PropTypes.func,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
  title: PropTypes.string,
  weight: PropTypes.number,
  description: PropTypes.string,
  categoryName: PropTypes.string
};