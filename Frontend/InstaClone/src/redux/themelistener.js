// ThemeListener.js
import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { useDispatch } from 'react-redux';
import { setSystemTheme } from './themeSlice/themeslice';

const ThemeListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Setting initial theme');
    dispatch(setSystemTheme());

    const appearanceListener = Appearance.addChangeListener(() => {
      console.log('System theme changed');
      dispatch(setSystemTheme());
    });

    return () => appearanceListener.remove();
  }, [dispatch]);

  return null;
};

export default ThemeListener;
