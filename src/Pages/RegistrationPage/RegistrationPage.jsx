import { RegistrationForm } from 'components/RegisterForm/RegisterForm';
import { ChakraProvider } from '@chakra-ui/react';

const RegistrationPage = () => {
  return (
    <ChakraProvider>
      <RegistrationForm />
    </ChakraProvider>
  );
};

export default RegistrationPage;

// 1. {name: 'Borore Peter', email: 'borore@gmail.gom', password: '44444444'}
// 2 {name: 'barat Darat', email: 'barat@gmail.com', password: '56565656'}
// 3 {name: 'ekfdkfskfms', email: 'user1@gmail.gom', password: '3567327'}
// 4 {name: 'Voldemar Borzoy', email: 'borzoy@mail.com', password: '25134566'}
