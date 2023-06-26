import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { render as rtlRender } from '@testing-library/react';

import theme from '../styles/theme';

export const render = (ui, { ...options } = {}) => {
  const Wrapper = ({ children }) => (
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...options });
};
