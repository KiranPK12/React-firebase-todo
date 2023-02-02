import React, { useContext,useReducer , useEffect } from "react";
import reducer from "./reducer";
import data from './data'
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const AppContext = React.createContext();

const initialTodos = data

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialTodos);
  const fetchData = async () => {
    let list=[];
    const querySnapshot = await getDocs(collection(db, "todolist"));
    querySnapshot.forEach((doc) => {
      list.push({id:doc.id,...doc.data()})
    });
    dispatch({type:'LOADING',payload:list})
  };
  
  useEffect(() => {
    fetchData();
  }, []);




  const removeItem = (id)=>{
    dispatch({type:'REMOVE_ITEM',payload:id})
  }

  const addItem = (todo)=>{
    dispatch({type:'ADD_ITEM',payload:todo})
  }
  
  return (
    <AppContext.Provider
      value={{state,removeItem,addItem}
      }
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
