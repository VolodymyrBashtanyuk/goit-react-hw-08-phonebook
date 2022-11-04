import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instanceContact = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  }
}

export const register = createAsyncThunk('auth/register',
    async (newUser, thunkApi) => {

    try {
      const { data } = await instanceContact.post('/users/signup', newUser);
      token.set(data.token)
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
    });
  
    export const loggedIn = createAsyncThunk('auth/login',
    async (credentials , thunkApi) => {
      
    try {
      const { data } = await instanceContact.post('/users/login', credentials);
      token.set(data.token)
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
      });
  
          export const loggedOut = createAsyncThunk('auth/logout',
    async (_, thunkApi) => {
      
    try {
      const { data } = await instanceContact.post('/users/logout');
      token.unset();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  });
