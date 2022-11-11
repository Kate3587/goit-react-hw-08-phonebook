import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { Audio } from 'react-loader-spinner';
import { fetchContactsData } from 'reduxe/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  ContactsSection, ContactsWrapp,
  ContactsLoading, MainText, ContactsText
} from './ContactsPage.styled';


const { getIsLoading, getError } = require('reduxe/selectors');

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContactsData());
  }, [dispatch]);
  return (
    <ContactsSection>
      <ContactsWrapp>
        <div>
          {isLoading && (
            <ContactsLoading>
              <Audio
                height="80"
                width="80"
                radius="9"
                color="red"
                ariaLabel="loading"
                wrapperStyle
              />
            </ContactsLoading>
          )}
          {error && <ContactsLoading>{error}</ContactsLoading>}
          <MainText>Phonebook</MainText>
          <ContactForm />
        </div>
        <div>
          <ContactsText>Contacts</ContactsText>
          <div>
            <Filter />
          </div>
        </div>
      </ContactsWrapp>
    </ContactsSection>
  );
};
export default ContactsPage;