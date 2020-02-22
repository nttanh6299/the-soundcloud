import React from 'react';
import SongsContainer from './containers/SongsContainer';
import PlayerContainer from './containers/PlayerContainer';
import NavContainer from './containers/NavContainer';
import HistoryContainer from './containers/HistoryContainer';

const App = () => {
  return (
    <React.Fragment>
      <NavContainer />
      <SongsContainer />
      <PlayerContainer />
      <HistoryContainer />
    </React.Fragment>
  );
};

export default App;
