import { configureStore } from '@reduxjs/toolkit';
import { api } from './todoOperations';
import { useDispatch } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;


setupListeners(store.dispatch);
