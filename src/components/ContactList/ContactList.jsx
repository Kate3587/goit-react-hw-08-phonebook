import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operation';

import { deleteContactsData } from '../../reduxe/contacts/contactsOperations';
import { getFilteredContacts } from '../../reduxe/selectors';
import {ItemName, ContactBtn} from './ContactList.styled';

const ContactList = ({contacts}) => {

//     const filterForUsers = useSelector(getFilteredContacts);
//     const dispatch = useDispatch();

//     const onDeleteUsers = id => {
//    dispatch(deleteContactsData(id));
//   };
    
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


    return (
        <ul>
        {filterForUsers.map(({ name, number, id }) => (
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