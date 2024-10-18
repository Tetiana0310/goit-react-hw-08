import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://671210804eca2acdb5f6ec38.mockapi.io";

export const fetchContacts = createAsyncThunk(
    'fetchData', async (_, thunkApi) => {
        try {
const { data } = await axios.get("/contacts");
      return data;
        }
        catch (error) {
            console.error("Error fetching contacts:", error.message);
            return thunkApi.rejectWithValue(error.message);
        }
    }
)