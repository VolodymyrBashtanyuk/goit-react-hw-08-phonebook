import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/Contacts/contactsOperation';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { MdDeleteForever } from 'react-icons/md';

import { ButtonDell } from '../ContactList/ContactListStyled';

export const DeleteContactModal = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(removeContact(id));
  };

  return (
    <>
      <ButtonDell onClick={onOpen}>
        <MdDeleteForever size="25px" />
      </ButtonDell>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={5} pt={5}>
            Are You sure want to delete Contact
          </ModalBody>
          <ModalFooter>
            <Button mr={4} colorScheme="red" onClick={() => onDelete(id)}>
              Yes
            </Button>
            <Button onClick={onClose} colorScheme="green">
              No
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
