import React from 'react';

import GlobalStyle from '../../styles';
import SideBar from '../SideBar';
import GridView from '../GridView';
import Navigation from '../Navigation';
import { App as StyledApp } from './styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Navigation />
        <div>
          <SideBar />
          <GridView />
        </div>
      </StyledApp>
    </>
  );
};

export default App;
