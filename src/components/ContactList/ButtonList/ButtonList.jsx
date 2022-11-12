// import { useDispatch } from 'react-redux';
// import { removeContact } from 'redux/Contacts/contactsOperation';
import { ChakraProvider } from '@chakra-ui/react';
import { UpdateContactModal } from 'components/Modal/UpdateContactModal';
import { DeleteContactModal } from 'components/Modal/DeleteContactModal';
import { CallContactModal } from 'components/Modal/CallContactModal';
// import { MdDeleteForever } from 'react-icons/md';
import { Container } from '../ContactListStyled';

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

  // const dispatch = useDispatch();

  //   const onUpdate = () => {
  //     UpdateContact();
  //   };

  // const onDelete = id => {
  //   dispatch(removeContact(id));
  // };

  return (
    <ChakraProvider>
      <Container>
        <CallContactModal name={name} />
        <UpdateContactModal id={id} name={name} number={number} />
        <DeleteContactModal id={id} />
      </Container>
    </ChakraProvider>
  );
};
