import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename='goit-react-hw-08-phonebook'>
            <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
