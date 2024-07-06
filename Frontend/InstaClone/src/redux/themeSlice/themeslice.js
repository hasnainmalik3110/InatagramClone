import {createSlice, isDraft} from '@reduxjs/toolkit';
import { Appearance } from 'react-native';
const systemTheme = Appearance.getColorScheme();


export const ThemeSlice = createSlice({
  name: 'theme',
  initialState: 
    systemTheme,
  

  reducers: {
    setSystemTheme: (state) => Appearance.getColorScheme(),
    setDarkTheme: () => 'dark',
    setLightTheme: () => 'light',
  },
});
export const { setSystemTheme, setDarkTheme, setLightTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
