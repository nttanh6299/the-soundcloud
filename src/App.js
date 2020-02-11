import React from 'react';
import Nav from './components/nav.js';
import SongsContainer from './containers/SongsContainer';

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <SongsContainer />
    </React.Fragment>
  );
};

export default App;
