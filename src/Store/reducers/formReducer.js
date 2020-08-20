
const initialState = {
  title: '',
  weight: '',
  description: '',
  categoryName: ''
}

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGEITEM':
      return {
        ...state,
        ...action.payload
      }
    case 'ADDNEWITEM':
    case 'CLEARFORM':
      return {
        ...initialState
      }
    default: return state
  }
}