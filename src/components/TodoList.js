import React from "react";
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const TodoList = () => {
  const { todolist: todos, loading } = useGlobalContext();
  const toast = useToast();

  const deleteTodo = async (id) => {
    try {
      await deleteDoc(doc(db, "todolist", id));
      toast({
        title: "Todo deleted.",
        status: "info",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
      return;
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }

  if (!todos.length) {
    return (
      <Badge colorScheme={"green"} p="4" m={4} borderRadius="lg">
        No todos !! Yaayyy
      </Badge>
    );
  }

  return (
    <VStack
      mt="10"
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth={"2px"}
      p="4"
      borderRadius={"lg"}
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((item) => {
        const { id, body } = item;
        return (
          <HStack key={id}>
            <Text>{body}</Text>
            <Spacer />
            <IconButton
              icon={<FaTrash />}
              isRound="true"
              _hover={{
                background: "red",
                color: "white",
              }}
              onClick={() => {
                deleteTodo(id);
              }}
            />
          </HStack>
        );
      })}
    </VStack>
  );
};

export default TodoList;
