import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Favorites } from './pages/Favorites';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { getContentMaxWidth, getContentPadding } from './styles/themeGetters';

const Main = styled.main`
  margin: 0 auto;
  max-width: ${getContentMaxWidth()};
  padding-bottom: ${getContentPadding()};
`;

const App = () => (
  <>
    <Header />
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Main>
  </>
);

export default App;
