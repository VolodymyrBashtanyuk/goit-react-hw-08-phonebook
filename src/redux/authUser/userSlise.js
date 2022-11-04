import { createSlice } from "@reduxjs/toolkit";
import { register, loggedIn } from "auth/authRegister";
// import { fetchContacts, addContact, removeContact } from "./Contacts/contactsOperation";

const initialState = {
    user: {
        name: null,
        email: null,
        password: null,
    },
    token: null,
    isLoading: false,
    isLoggedIn: false,
};

const registerSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.pending](state) {
             state.isLoading = true;
        },
         [register.fulfilled](state, action) {
            state.isLoading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
             state.isLoggedIn = true;
        },
        [register.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        
          [loggedIn.pending](state) {
             state.isLoading = true;
        },
         [loggedIn.fulfilled](state, action) {
            state.isLoading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
             state.isLoggedIn = true;
        },
        [loggedIn.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
         },

        
  },
   
  
});
export const registerReducer = registerSlice.reducer;
