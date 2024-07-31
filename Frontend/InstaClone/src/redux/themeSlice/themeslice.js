// themeSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { Appearance } from 'react-native';

const systemTheme = Appearance.getColorScheme();

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: systemTheme,
  },
  reducers: {
    setSystemTheme: (state) => {
      state.theme = Appearance.getColorScheme();
    },
    setDarkTheme: (state) => {
      state.theme = 'dark';
    },
    setLightTheme: (state) => {
      state.theme = 'light';
    },
  },
});

export const { setSystemTheme, setDarkTheme, setLightTheme } = themeSlice.actions;
export default themeSlice.reducer;
