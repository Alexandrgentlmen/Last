import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '~/auth/store/authSlice';

export const store = configureStore({
  devTools: true,
  reducer: {
    authSlice: authSlice.reducer,
  },
});
