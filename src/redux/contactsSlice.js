import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

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
  },
});

export const contactsReducer = slice.reducer;
export const selectContacts = (state) => state.contacts.items;
