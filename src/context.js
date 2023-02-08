import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import { onSnapshot } from "firebase/firestore";
import { ref } from "./firebase";

const AppContext = React.createContext();

const initialTodos = {
  todolist: [],
  loading: true,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialTodos);
  const fetchData = async () => {
    onSnapshot(ref, (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      dispatch({ type: "LOADING", payload: list });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const addItem = (todo) => {
    dispatch({ type: "ADD_ITEM", payload: todo });
  };

  return (
    <AppContext.Provider value={{ ...state, removeItem, addItem }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
