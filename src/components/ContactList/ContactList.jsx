import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { fetchContactsData } from '../../reduxe/contacts/contactsOperations';

import { deleteContactsData } from '../../reduxe/contacts/contactsOperations';
import {ItemName, ContactBtn} from './ContactList.styled';

const ContactList = ({ contacts }) => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsData());
  }, [dispatch]);

    const onDeleteUsers = id => {
   dispatch(deleteContactsData(id));
  };

    return (
        <ul>
        {contacts.map(({id, name, number}) => (
            <div
                key={id}>
                <ItemName>{name}: {number}</ItemName>
                <ContactBtn onClick={() => onDeleteUsers(id)} type="button">Delete</ContactBtn>
            </div>
        ))}
        </ul>
    )
};

export default ContactList;

ContactList.propTypes = {
    filterForUsers: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string,
        number: PropTypes.string,
        id: PropTypes.string,
    })),
    onDeleteUsers: PropTypes.func,
};