import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const instanceContact = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const token = {
  set(token) {
    instanceContact.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instanceContact.defaults.headers.common.Authorization = '';
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
  
export const userCurrent = createAsyncThunk('auth/current',
      
  async (_, { rejectWithValue, getState }) => {
    const { auth } = getState();
    const userToken = auth.token;

    if (auth.userToken === undefined) {
      return rejectWithValue();

    }
    
    try {
    token.set(userToken)
        const {data} = await instanceContact.get('/users/current');
        return data;
    } catch (error) {
      token.unset();
      return rejectWithValue(error.message);
    }
    
  });
