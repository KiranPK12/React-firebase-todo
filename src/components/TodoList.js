import Re from "react";
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useGlobalContext } from "../context";


const TodoList = () => {
  const { state: todos, removeItem } = useGlobalContext();  


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
                removeItem(id);
              }}
            />
          </HStack>
        );
      })}
    </VStack>
  );
};

export default TodoList;
