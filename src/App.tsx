import AddBook from "./components/AddBook/AddBook";
import BookList from "./components/BookList";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import GenerateBook from "./components/GenerateBook.tsx/GenerateBook";

export const App = () => {
  return (
    <>
      <ChakraProvider>
        <Flex
          alignItems="center"
          mt="5%"
          justifyContent="space-between"
          ml="2rem"
          mr="2rem"
        >
          <Flex flexDir="column" w="100%">
            <AddBook />
            <BookList />
          </Flex>
          <GenerateBook />
        </Flex>
      </ChakraProvider>
    </>
  );
};
