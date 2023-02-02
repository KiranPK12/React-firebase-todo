import { HStack, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [loading, setloading] = useState(false)
  const handleSubmit = async (e) => {
    setloading(true)
    await e.preventDefault();
    const docRef = await addDoc(collection(db, "todolist"), {
      body: todo,
    });
    console.log("Document written with ID: ", docRef.id);
    setloading(false)
    setTodo('')
  };
  if(loading){
    return <h2>loading</h2>
  }
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt={10}>
        <Input
          variant={"filled"}
          placeholder="Add todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button colorScheme={"pink"} px="8" type="submit" >
          Add todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
