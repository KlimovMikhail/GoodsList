/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './GoodsListElement.css'
import { getCategory } from '../Utils/categoryUtils'
import PropTypes from 'prop-types';

export const GoodsListElement = ({ category, good, onDelete, onToggle, onSaveItem }) => {
  const [inputChange, setInputChange] = useState({
    isEditing: false,
    title: "",
    weight: "",
    description: "",
    categoryName: "",
    disabled: true
  })

  const onDeleteItem = () => {
    onDelete(good.id)
  }

  const onToggleItem = () => {
    onToggle(good.id);
  }

  const onInputChange = ({ target }) => {
    setInputChange({
      ...inputChange,
      [target.name]: target.value
    })
  }

  const onEditItem = () => {
    const { title, weight, description, categoryName } = good
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
    onSaveItem(inputChange, good.id)
    setInputChange({
      ...inputChange,
      isEditing: false,
      disabled: true
    })
  }

  const { title, weight, description, categoryName } = good
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
      <input name="title" type="checkbox" onClick={onToggleItem} />
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
        <button onClick={onDeleteItem}>Delete</button>
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