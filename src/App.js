import React from 'react';
import SongsContainer from './containers/SongsContainer';
import PlayerContainer from './containers/PlayerContainer';
import NavContainer from './containers/NavContainer';

const App = () => {
  return (
    <React.Fragment>
      <NavContainer />
      <SongsContainer />
      <PlayerContainer />
    </React.Fragment>
  );
};

export default App;
