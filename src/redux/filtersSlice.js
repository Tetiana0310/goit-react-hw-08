import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        contacts: {
            items: []
        },
        filters: {
            name: ""
        }
    }
})