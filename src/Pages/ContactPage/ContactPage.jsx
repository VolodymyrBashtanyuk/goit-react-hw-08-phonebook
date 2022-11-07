import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Filter } from 'components/FilterContact/FilterContact';
import { ContactList } from 'components/ContactList/ContactList';
import { SubTitle, ErrorMessage } from 'components/AppStyle';
import { getContact, getFilter, getState, getLoggedIn } from 'redux/selectors';
import { filterContacts } from 'redux/Contacts/filterSlice';
import { fetchContacts, removeContact } from 'redux/Contacts/contactsOperation';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';

const ContactsPage = () => {
  const contacts = useSelector(getContact);
  const { isLoading, error } = useSelector(getState);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getLoggedIn);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterChange = evt => {
    const { value } = evt.currentTarget;
    dispatch(filterContacts(value));
  };

  const getFilters = () => {
    if (!filter) {
      return contacts;
    }
    const normalaizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) => {
      const normalaizedName = name.toLowerCase();
      const result = normalaizedName.includes(normalaizedFilter);
      return result;
    });
  };
  const onDelete = id => {
    dispatch(removeContact(id));
  };

  return (
    <>
      {isLoggedIn && (
        <>
          <SubTitle>Contacts</SubTitle>
          <Filter onChange={filterChange} value={filter} />
          {error ? (
            <ErrorMessage>Please try again later {error} :(</ErrorMessage>
          ) : (
            <>
              {isLoading ? (
                <Loader />
              ) : (
                <ContactList items={getFilters()} onDelete={onDelete} />
              )}
              <ToastContainer />
            </>
          )}
        </>
      )}
    </>
  );
};

export default ContactsPage;
