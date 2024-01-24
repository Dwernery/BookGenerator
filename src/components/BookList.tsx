import { Container, Flex, List, ListIcon, ListItem } from "@chakra-ui/react";
import { FaBook } from "react-icons/fa";

const BookList = () => {
  return (
    <Flex mt="2rem">
      <Container overflowY="scroll" h="20rem" ml="0">
        <List spacing={3} pl="0">
          <ListItem>
            <ListIcon as={FaBook} />
            The Shining
          </ListItem>
          <ListItem>
            <ListIcon as={FaBook} />
            Doctor Sleep
          </ListItem>
          <ListItem>
            <ListIcon as={FaBook} />
            Firestarter
          </ListItem>
          <ListItem>
            <ListIcon as={FaBook} />
            Firestarter
          </ListItem>
          <ListItem>
            <ListIcon as={FaBook} />
            Firestarter
          </ListItem>
          <ListItem>
            <ListIcon as={FaBook} />
            Firestarter
          </ListItem>
          <ListItem>
            <ListIcon as={FaBook} />
            Firestarter
          </ListItem>
          <ListItem>
            <ListIcon as={FaBook} />
            Firestarter
          </ListItem>
          <ListItem>
            <ListIcon as={FaBook} />
            Firestarter
          </ListItem>
          <ListItem>
            <ListIcon as={FaBook} />
            Firestarter
          </ListItem>
          <ListItem>
            <ListIcon as={FaBook} />
            Firestarter
          </ListItem>
          <ListItem>
            <ListIcon as={FaBook} />
            Firestarter
          </ListItem>
          <ListItem>
            <ListIcon as={FaBook} />
            Firestarter
          </ListItem>
        </List>
      </Container>
    </Flex>
  );
};

export default BookList;
