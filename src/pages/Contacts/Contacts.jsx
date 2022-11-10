import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import { Audio } from 'react-loader-spinner';

import { fetchContacts } from 'redux/contacts/contacts-operation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
const { getIsLoading, getError } = require('redux/contacts/contacts-selecors');

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div>
          {isLoading && (
            <div className={s.loading}>
              <Audio
                height="80"
                width="80"
                radius="9"
                color="blue"
                ariaLabel="loading"
                wrapperStyle
              />
            </div>
          )}
          {error && <p className={s.loading}>{error}</p>}
          <h1>Phonebook</h1>
          <ContactForm />
        </div>
        <div>
          <h2>Contacts</h2>
          <div>
            <Filter />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contacts;