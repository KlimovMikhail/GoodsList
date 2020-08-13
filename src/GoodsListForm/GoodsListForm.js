import React, { useState } from 'react'
import './GoodsListForm.css'
import PropTypes from 'prop-types';

export const GoodsListForm = ({ category, onAdd }) => {
  const [inputChange, setInputChange] = useState({ title: '', weight: '', description: '', categoryName: '' })

  const onInputChange = ({ target }) => {
    setInputChange({
      ...inputChange,
      [target.name]: target.value
    })
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    onAdd(inputChange)
    setInputChange({ title: '', weight: '', description: '', categoryName: '' })
  }

  console.log("inputChange", inputChange);

  return (
    <div>
      <form
        className="GoodsListForm"
        onSubmit={onFormSubmit}
      >
        <input
          className="GoodsListFormInput"
          placeholder="Title"
          name="title"
          value={inputChange.title}
          onChange={onInputChange}
        />
        <input
          className="GoodsListFormInput"
          placeholder="Weight"
          name="weight"
          value={inputChange.weight}
          onChange={onInputChange}
        />
        <input
          className="GoodsListFormInput"
          placeholder="Description"
          name="description"
          value={inputChange.description}
          onChange={onInputChange}
        />
        <select className="GoodsListFormInput" name="categoryName" value={inputChange.categoryName} onChange={onInputChange}>
          <option value="0" >Chose category</option>
          {category.map((item) => <option key={item.id} value={item.categoryName}> {item.categoryName} </option>)}
        </select>
        <button className="GoodsListFormButton">Add</button>
      </form>
    </div>
  )
}

GoodsListForm.propTypes = {
  onAdd: PropTypes.func,
  category: PropTypes.array
}