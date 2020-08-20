/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react'
import './GoodsListForm.css'
import PropTypes from 'prop-types';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import * as formAction from '../actions/formActions'
import * as goodsAction from '../actions/goodsActions'
import { checkSelected } from '../Utils/goodsUtils'
import { category } from '../Mocks/CategoryMock'


export const GoodsListForm = () => {

  const dispatch = useDispatch()
  const goods = useSelector(state => state.goodsReducer.goods, shallowEqual)
  const form = useSelector(state => state.formReducer, shallowEqual)

  const onInputChange = ({ target }) => {
    dispatch(formAction.changeItem({
      [target.name]: target.value
    }))
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    dispatch(goodsAction.addNewItem(form))
    dispatch(formAction.clearForm())
  }

  const deleteSelected = useCallback(
    () => {
      dispatch(goodsAction.deleteSelected())
    },
    [dispatch],
  )

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
          value={form.title}
          onChange={onInputChange}
        />
        <input
          className="GoodsListFormInput"
          placeholder="Weight"
          name="weight"
          value={form.weight}
          onChange={onInputChange}
        />
        <input
          className="GoodsListFormInput"
          placeholder="Description"
          name="description"
          value={form.description}
          onChange={onInputChange}
        />
        <select className="GoodsListFormInput" name="categoryName" value={form.categoryName} onChange={onInputChange}>
          <option value="0" >Chose category</option>
          {category.map((item) => <option key={item.id} value={item.categoryName}> {item.categoryName} </option>)}
        </select>
        <button className="GoodsListFormButton">Add</button>
        <button className="GoodsListFormButton" onClick={deleteSelected} disabled={checkSelected(goods)} >Delete Selected</button>
      </form>
    </div>
  )
}

GoodsListForm.propTypes = {
  onAdd: PropTypes.func,
  category: PropTypes.array
}