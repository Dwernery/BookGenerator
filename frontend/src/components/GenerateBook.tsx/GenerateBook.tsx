import { Button, Flex } from "@chakra-ui/react";

const GenerateBook = () => {
  return (
    <Flex flexDirection="column">
      <div
        style={{ border: "2px solid black", width: "30rem", height: "40rem" }}
      ></div>
      <Button colorScheme="green" ml="10rem" mr="10rem" mt="1rem">
        Generate
      </Button>
    </Flex>
  );
};

export default GenerateBook;
