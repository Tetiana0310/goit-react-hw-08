import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../auth/operations";


export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll', async (_, thunkApi) => {
        try {
const response = await api.get("/contacts");
      return response.data;
        }
        catch (error) {
            console.error("Error fetching contacts:", error.message);
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact', 
    async (contact, thunkApi) => {
        try {
            const response  = await api.post("/contacts",contact);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact', async (id, thunkApi) => {
         try {
      const { data } = await api.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
    }
)