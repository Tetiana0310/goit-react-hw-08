import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contacts/contactsOps";
import { selectContactFilter } from "./filtersSlice";

const initialState = {
  items: [],
  loading: false,
  error: null,
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
      builder
          .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
    })
    .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
     .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
     })
       .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContact.pending,
          addContact.pending
        ),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContact.fulfilled,
          addContact.fulfilled
        ),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});


export const contactsReducer = slice.reducer;
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
 
export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);