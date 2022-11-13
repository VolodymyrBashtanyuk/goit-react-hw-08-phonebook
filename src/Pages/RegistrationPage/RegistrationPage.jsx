import { RegistrationForm } from 'components/RegisterForm/RegisterForm';
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';

const RegistrationPage = () => {
  return (
    <ChakraProvider>
      <RegistrationForm />
      <ToastContainer />
    </ChakraProvider>
  );
};

export default RegistrationPage;
