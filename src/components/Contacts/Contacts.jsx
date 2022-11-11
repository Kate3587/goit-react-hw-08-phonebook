import { Button } from 'components/MainButton/MainButton';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { deleteContactsData } from 'reduxe/contacts/contactsOperations';

export const Contacts = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContactsData(contact.id));
  return (
    <>
      <p>{contact.name}:</p>
      <p>{contact.number}</p>
      <Button onClick={handleDelete}>Delete contact</Button>
    </>
  );
};

Contacts.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};