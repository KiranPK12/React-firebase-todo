import React from "react";
import { Heading, VStack, IconButton , useColorMode } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { FaSun, FaMoon } from "react-icons/fa";

const App = () => {
  
  const { colorMode, toggleColorMode } = useColorMode()

    return (
    <VStack p={4}>
      <IconButton
        icon={ colorMode === 'light' ? <FaMoon/> : <FaSun/>}
        isRound="true"
        size="lg"
        alignSelf={"flex-end"}
        onClick={toggleColorMode}
      />
      <Heading
        pb={16}
        fontWeight="extrabold"
        size={"2xl"}
        bgGradient="linear(to-r,pink.500,pink.300,blue.500)"
        bgClip={"text"}
      >
        Todo Application
      </Heading>
      <TodoList />
      <AddTodo/>
    </VStack>
  );
};

export default App;
