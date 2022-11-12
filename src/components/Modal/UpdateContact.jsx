import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact, addContact } from 'redux/Contacts/contactsOperation';

// import { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { MdDeleteForever, MdSystemUpdate } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import {
  ButtonCall,
  ButtonDell,
  ButtonUpdate,
  Container,
} from '../ContactList/ContactListStyled';

export const UpdateContact = ({ id, name, number }) => {
  const [names, setNames] = useState(name);
  const [numbers, setNumbers] = useState(number);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const onUpdate = () => {
    // dispatch(addContact({ names, numbers }));
    dispatch(updateContact({ id, names, numbers }));
  };

  const inputChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setNames(value);
        break;
      case 'number':
        setNumbers(value);
        break;
      default:
        return;
    }
  };

  //   console.log(id);
  //   console.log(name);
  //   console.log(number);

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <ButtonUpdate onClick={onOpen}>
        <MdSystemUpdate size="25px" />
      </ButtonUpdate>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You can change</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                id={names}
                type="text"
                name="name"
                value={names}
                onChange={inputChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Phone</FormLabel>
              <Input
                id={numbers}
                value={numbers}
                onChange={inputChange}
                type="tel"
                name="number"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onUpdate}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
