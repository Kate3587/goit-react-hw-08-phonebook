import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

import storage from 'redux-persist/lib/storage';

import { authReducer } from './Authorization/AuthSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persisterAuth = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
    auth: persisterAuth,
  },
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
