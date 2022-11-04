import { configureStore } from "@reduxjs/toolkit";
import {  contactReducer } from "./contactsSlice";
import { filter } from "./filterSlice";
import { registerReducer } from "./authUser/userSlise";



 export const store = configureStore({
    reducer: {
       contacts: contactReducer,
       filter,
       auth: registerReducer,
    },
 });