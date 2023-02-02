
const reducer = (state,action) => {
  if(action.type==='REMOVE_ITEM'){
    return state.filter(item=>{
      return item.id !== action.payload
    })
  }
  if(action.type==='ADD_ITEM'){
    console.log('added ');
  }
  if(action.type==='LOADING'){
    return action.payload
  }
}

export default reducer;