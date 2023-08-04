// import { combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";

// import { contactsReducer } from "./ContactsSlice";
// import filterReducer from "./FilterSlice";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// })

// export const store = configureStore({
//   reducer: rootReducer
// })

// import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from "./contacts/ContactsSlice";
import filterReducer from "./contacts/FilterSlice";
import { authReducer } from "./auth/AuthSlice";

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
//   auth: authReducer,
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
      filter: filterReducer,
      auth: persistReducer(authPersistConfig, authReducer),
  },
  // rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);