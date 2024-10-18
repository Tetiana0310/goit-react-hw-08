import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact } from "./contactsOps";

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
      });
    
  },
});

export const contactsReducer = slice.reducer;
export const { deleteContact } = slice.actions;
export const selectContacts = (state) => state.contacts.items;
