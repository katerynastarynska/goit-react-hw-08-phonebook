import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from 'react-hot-toast';

import { store, persistor } from "./redux/store";
import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename='/goit-react-hw-08-phonebook'>
          <Toaster
            toastOptions={{
              style: {
                border: '1px solid #713200',
                padding: '10px',
                color: '#0d55a7',
                backgroundColor: '#97deff24',
              },
            }}
          />        <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);