
const reducer = (state,action) => {
  if(action.type==='REMOVE_ITEM'){
    return state.filter(item=>{
      return item.id !== action.payload
    })
  }
  if(action.type==='LOADING'){
    return {loading:false,todolist:action.payload}
  }
}

export default reducer;