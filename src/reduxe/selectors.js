// export const getFilteredContacts = state =>
//   state.contacts.items.filter(item =>
//     item.name.toLowerCase().includes(state.filter.filter.toLowerCase())
//   );
// export const getFilter = state => state.filter.filter;



import { createSelector } from '@reduxjs/toolkit';
export const getContacts = state => state?.contacts?.contacts?.items;
export const getIsLoading = state => state.isLoading;
export const getError = state => state.error;
export const getFilter = state => state.contacts.filter.filter;

export const getContactsFilter = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);