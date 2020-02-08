import React, { useState, useEffect } from 'react';
import Nav from './components/nav.js';
import Songs from './components/songs';

import { fetchApi } from './utils/apiCaller';
import { TOKEN_API } from './constants/urlApi';

const defaultState = {
  state: {
    collection: [],
    nextUrl: ''
  },
  fetching: true
};

const App = () => {
  const [state, setState] = useState(defaultState.state);
  const [fetching, setFetching] = useState(defaultState.fetching);

  useEffect(() => {
    fetchApi('/tracks', 'GET', null, {
      client_id: TOKEN_API,
      tags: 'house',
      linked_partitioning: 1
    }).then(res => {
      setState(res);
      setFetching(false);
    });
  }, []);

  return (
    <div>
      <Nav />
      {/* <ul>
        {state.collection &&
          state.collection.map((s, index) => <li key={index}>{s.id}</li>)}
      </ul> */}
      <Songs songs={state.collection} loading={fetching} />
    </div>
  );
};

export default App;
