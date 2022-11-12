import { useDispatch } from 'react-redux';
import { removeContact, updateContact } from 'redux/Contacts/contactsOperation';
import { ChakraProvider } from '@chakra-ui/react';
import { UpdateContact } from 'components/Modal/UpdateContact';
import { MdDeleteForever, MdSystemUpdate } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import {
  ButtonCall,
  ButtonDell,
  ButtonUpdate,
  Container,
} from '../ContactListStyled';

// import { useSelector } from 'react-redux';
// import { getContact } from 'redux/selectors';

export const ButtonList = ({ id, name, number }) => {
  //   const contacts = useSelector(getContact);

  //   const list = contacts.map(({ id, name, number }) => {
  //     const item = {
  //       id,
  //       name,
  //       number,
  //     };
  //     return item;
  //   });
  //   console.log(list.id);

  const dispatch = useDispatch();

  //   const onUpdate = () => {
  //     UpdateContact();
  //   };

  const onDelete = id => {
    dispatch(removeContact(id));
  };

  return (
    <ChakraProvider>
      <Container>
        <ButtonCall onClick={() => onDelete(id)}>
          <FaPhoneAlt size="25px" />
        </ButtonCall>
        <UpdateContact id={id} name={name} number={number} />
        {/* <ButtonUpdate onClick={() => onUpdate()}>
          <MdSystemUpdate size="25px" />
        </ButtonUpdate> */}
        <ButtonDell onClick={() => onDelete(id)}>
          <MdDeleteForever size="25px" />
        </ButtonDell>
      </Container>
    </ChakraProvider>
  );
};
