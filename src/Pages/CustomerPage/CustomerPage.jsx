import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Title } from '../../components/AppStyle';
import { useSelector, useDispatch } from 'react-redux';
import { getContact } from '../../redux/selectors';
import { addContact } from 'redux/Contacts/contactsOperation';
import { dublicate } from 'components/Notifigation/Notification';
import { ToastContainer } from 'react-toastify';

const CustomerPage = () => {
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
    console.log(data);
    dispatch(addContact(data));
  };
  return (
    <>
      <Title>Add contacts in Phonebook</Title>
      <ContactForm onAddContacs={onAddContacts} />
      <ToastContainer />
    </>
  );
};

export default CustomerPage;
