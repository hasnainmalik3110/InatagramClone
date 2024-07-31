// store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice/themeslice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
