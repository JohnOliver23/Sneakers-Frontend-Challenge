import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  </Router>
);

export default App;
