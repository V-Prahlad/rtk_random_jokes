import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { userAPI } from './rtk';

export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware),
});

setupListeners(store.dispatch);
