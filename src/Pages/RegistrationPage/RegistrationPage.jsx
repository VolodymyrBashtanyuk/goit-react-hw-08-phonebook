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
