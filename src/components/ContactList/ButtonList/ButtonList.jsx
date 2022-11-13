import PropTypes from 'prop-types';
import { UpdateContactModal } from 'components/Modal/UpdateContactModal';
import { DeleteContactModal } from 'components/Modal/DeleteContactModal';
import { CallContactModal } from 'components/Modal/CallContactModal';
import { ChakraProvider } from '@chakra-ui/react';
import { Container } from '../ContactListStyled';

export const ButtonList = ({ id, name, number }) => {
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

ButtonList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
