import { Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

const AddBook = () => {
  const [book, setBook] = useState<string>("");

  return (
    <Flex>
      <Input
        placeholder="The Shining"
        value={book}
        onChange={(e) => setBook(e.target.value)}
        w="20rem"
      />
      <Button colorScheme="blue" w="10rem" ml="1rem">
        Add Book
      </Button>
    </Flex>
  );
};

export default AddBook;
