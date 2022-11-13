
import { instanceContact } from 'auth/authRegister';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { success, errorMassege, removeMessage} from 'components/Notifigation/Notification';


export const fetchContacts = createAsyncThunk('contacts/fetch',
  async (_, thunkApi) => {
    try {
      const { data } = await instanceContact.get('/contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  });

export const addContact = createAsyncThunk('contacts/add',
  async (result, thunkApi) => {
    try {
      const { data } = await instanceContact.post('/contacts', result); 
      success();
      return data;
    } catch (error) {
      errorMassege();
      return thunkApi.rejectWithValue(error.message);
    }
    });
  
export const removeContact = createAsyncThunk('contacts/delete',
  async (contactId, thunkApi) => {
    try {
      const {data} = await instanceContact.delete(`/contacts/${contactId}`);
      removeMessage(data.name);
      return data;
    } catch (error) {
      errorMassege();
      return thunkApi.rejectWithValue(error.message);
    }
  });

  export const updateContact = createAsyncThunk('contacts/update',
    async (contactId, { rejectWithValue}) => {
      const result = {
        name: contactId.names,
        number: contactId.numbers,
      }
    try {
      const {data} = await instanceContact.patch(`contacts/${contactId.id}`, result );
      return data;
    } catch (error) {
      errorMassege();
      return rejectWithValue(error.message);
    }
  });