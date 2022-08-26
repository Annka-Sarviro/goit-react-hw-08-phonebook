import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactApi } from './contactApiSlice';
import { userApi } from './userApi';
import user from './user';

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
import storage from 'redux-persist/lib/storage';

const userPersistConfig = {
  key: 'user',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistedUserReducer = persistReducer(userPersistConfig, user);

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    [contactApi.reducerPath]: contactApi.reducer,
    user: persistedUserReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(userApi.middleware),
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
