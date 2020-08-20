export const addNewItem = (item) => {
  return {
    type: 'ADDNEWITEM',
    payload: item
  }
}

export const changeItem = (changedItem) => {
  return {
    type: 'CHANGEITEM',
    payload: changedItem
  }
}

export const clearForm = () => {
  return {
    type: 'CLEARFORM'
  }
}