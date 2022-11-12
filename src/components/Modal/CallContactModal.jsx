import { useState } from 'react';
import { ButtonCall } from 'components/ContactList/ContactListStyled';
import { FaPhoneAlt } from 'react-icons/fa';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
  Progress,
} from '@chakra-ui/react';

const noImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrGcz-CAJweJ_YbvY8Sb2bPsCNQwsSJ2jng&usqp=CAU';

export const CallContactModal = ({ name }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgOverlay = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const [overlay, setOverlay] = useState();

  return (
    <>
      <ButtonCall
        onClick={() => {
          setOverlay(bgOverlay());
          onOpen();
        }}
      >
        <FaPhoneAlt size="25px" />
      </ButtonCall>

      <Modal
        isCentered
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        {overlay}
        <ModalOverlay />
        <ModalContent bg="green.300">
          <ModalCloseButton />
          <ModalBody fontWeight="bold" pb="10px" pt="20px" textAlign="center">
            <Image
              bgColor="white"
              borderRadius="full"
              boxSize="150px"
              m="10px auto"
              objectFit="scale-down"
              border="1px solid #0c1434"
              src={noImage}
              alt={name}
            />
            You calling.. {name}
            <Progress size="sm" isIndeterminate />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} colorScheme="red">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
