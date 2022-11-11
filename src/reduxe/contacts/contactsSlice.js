import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsData } from './contactsOperations';
import { addContactsData } from './contactsOperations';
import { deleteContactsData } from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContactsData.pending]: handlePending,
    [fetchContactsData.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContactsData.rejected]: handleRejected,
    [addContactsData.pending]: handlePending,
    [addContactsData.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContactsData.rejected]: handleRejected,
    [deleteContactsData.pending]: handlePending,
    [deleteContactsData.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});

export default contactsSlice.reducer;