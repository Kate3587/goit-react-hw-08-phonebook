import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ContactList from 'components/ContactList';

import { changeFilter } from '../../reduxe/filter/filterSlice';
import { getContactsFilter } from 'reduxe/selectors';
import { FilterLabel, FilterInput, FilterWrap } from './Filter.styled';

const Filter = () => {

    const value = useSelector(getContactsFilter);
    const dispatch = useDispatch();
    const onChangeFilter = event => {
        dispatch(changeFilter(event.target.value.trim()));
    };
    
    return (
        <>
        <FilterWrap>
            <FilterLabel>
                Find contacts by name
            </FilterLabel>
            <br />
            <FilterInput
                onChange={event => onChangeFilter(event)}
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder="Search username"
            />
            </FilterWrap>
            <ContactList contacts={value} />
        </>
        
    )
};
    
export default Filter;

Filter.propTypes = {
    inputLabel: PropTypes.string,
    onChangeFilter: PropTypes.func,
    value: PropTypes.string,
};

