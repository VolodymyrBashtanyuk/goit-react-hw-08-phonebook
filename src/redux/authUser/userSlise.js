import { createSlice } from "@reduxjs/toolkit";
import { register, loggedIn, loggedOut, userCurrent } from "auth/authRegister";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoading: false,
    isLoadingCurrentUser: false,
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
        
          [loggedOut.pending](state) {
             state.isLoading = true;
        },
         [loggedOut.fulfilled](state, action) {
            state.isLoading = false;
             state.user = { name: null, email: null };
             state.token = '';
             state.isLoggedIn = false;
        },
        [loggedOut.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },  
        
        [userCurrent.pending](state) {
            state.isLoadingCurrentUser = true;
        },
         [userCurrent.fulfilled](state, action) {
           state.isLoadingCurrentUser = false;
             state.user = action.payload;
             state.isLoggedIn = true;
        },
        [userCurrent.rejected](state, action) {
           state.isLoadingCurrentUser = false;
            state.error = action.payload;
         },
  },
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['token'],
};

export const extraReducers = persistReducer(
	persistConfig,
    registerSlice.reducer,
    
);

export const registerReducer = registerSlice.reducer;
