import { HStack, Input, Button, Spinner, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddTodo = () => {
  var _ = require("lodash");
  const [todo, setTodo] = useState("");
  const [loading, setloading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    setloading(true);
    await e.preventDefault();
    if (!todo) {
      toast({
        title: "No content.",
        description: "Enter a valid Todo",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
      setloading(false);
      setTodo("");
      return;
    } else {
      let titlecasedTodo = _.startCase(_.camelCase(todo));
      const docRef = await addDoc(collection(db, "todolist"), {
        body: titlecasedTodo,
      });
      setloading(false);
      setTodo("");
      if (docRef.id) {
        toast({
          title: "Todo added.",
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error.",
          description: "Try again after sometime",
          status: "warning",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      }
    }
  };

  if (loading) {
    return <Spinner color="red.500" mt={10} />;
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
        <Button colorScheme={"pink"} px="8" type="submit">
          Add todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
