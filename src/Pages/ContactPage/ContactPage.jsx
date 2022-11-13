import { ContactForm } from 'components/ContactForm/ContactForm';
import { useSelector, useDispatch } from 'react-redux';
import { getContact } from 'redux/selectors';
import { addContact } from 'redux/Contacts/contactsOperation';
import { dublicate } from 'components/Notifigation/Notification';
import { ToastContainer } from 'react-toastify';
import { Title } from 'components/AppStyle';
import { Wrapper } from 'components/ContactForm/ContactFormStyle';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  const isDublicate = ({ name }) => {
    const result = contacts.find(item => item.name === name);
    return result;
  };

  const onAddContacts = data => {
    if (isDublicate(data)) {
      dublicate(data);
      return;
    }
    dispatch(addContact(data));
  };
  return (
    <Wrapper>
      <Title>Add contacts in Phonebook</Title>
      <ContactForm onAddContacs={onAddContacts} />
      <ToastContainer />
    </Wrapper>
  );
};

export default ContactsPage;
