import { goods } from '../../Mocks/GoodsMock'
import { addNewItem, removeElementById, getTotal, changeGoodsSelected, selectedItems, changeItem, removeSelectedItems } from '../../Utils/goodsUtils'


const initialState = {
  goods: goods,
  total: getTotal(goods),
  totalWeightSelectedItem: 0
}

export const goodsReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADDNEWITEM': {
      const newArray = addNewItem(action.payload, state.goods)
      return {
        ...state,
        goods: newArray,
        total: getTotal(newArray)
      }
    }
    case 'SAVEITEM': {
      const newArr = changeItem(state.goods, action.payload, action.id)
      const newSelectedArray = selectedItems(newArr)
      return {
        ...state,
        goods: newArr,
        total: getTotal(newArr),
        totalWeightSelectedItem: getTotal(newSelectedArray)
      }
    }
    case 'TOGGLEITEM': {
      const arr = changeGoodsSelected(state.goods, action.id)
      const selectedItemsArray = selectedItems(arr)
      return {
        ...state,
        goods: arr,
        totalWeightSelectedItem: getTotal(selectedItemsArray)
      }
    }
    case 'DELETEITEM': {
      const newArray = removeElementById(action.id, state.goods)
      const array = selectedItems(newArray)
      return {
        ...state,
        goods: newArray,
        total: getTotal(newArray),
        totalWeightSelectedItem: getTotal(array)
      }
    }
    case 'DELETESELECTED': {
      const selectedArray = removeSelectedItems(state.goods)
      const array = selectedItems(selectedArray)
      return {
        ...state,
        goods: selectedArray,
        total: getTotal(selectedArray),
        totalWeightSelectedItem: getTotal(array)
      }
    }
    default: return state
  }
}