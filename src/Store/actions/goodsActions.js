export const addNewItem = (item) => {
  return {
    type: 'ADDNEWITEM',
    payload: item
  }
}

export const saveItem = (savedItem, idItem) => {
  return {
    type: 'SAVEITEM',
    payload: savedItem,
    id: idItem
  }
}

export const toggleItem = (idItem) => {
  return {
    type: 'TOGGLEITEM',
    id: idItem
  }
}

export const deleteSelected = () => {
  return {
    type: 'DELETESELECTED'
  }
}

export const deleteItem = (idItem) => {
  return {
    type: 'DELETEITEM',
    id: idItem
  }
}

