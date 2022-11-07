import { configureStore } from "@reduxjs/toolkit";
import { contactReducer,  } from "./Contacts/contactsSlice";
import { filter } from "./Contacts/filterSlice";
import {  extraReducers } from "./authUser/userSlise";
 import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';



 export const store = configureStore({
    reducer: {
       auth: extraReducers,
       contacts: contactReducer,
       filter,
    },
     middleware: getDefaultMiddleware=>  getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
  }),
        
 });
 
export const persistor = persistStore(store);