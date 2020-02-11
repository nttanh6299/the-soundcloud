import React from 'react';
import Nav from './components/nav.js';
import SongsContainer from './containers/SongsContainer';
import PlayerContainer from './containers/PlayerContainer';

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <SongsContainer />
      <PlayerContainer />
    </React.Fragment>
  );
};

export default App;
