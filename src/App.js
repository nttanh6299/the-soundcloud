import React, { useState } from 'react';

import { fetchApi } from './utils/apiCaller';

const App = () => {
  const [data, setData] = useState(0);

  return <div onClick={() => setData(prev => prev + 1)}>{data}</div>;
};

export default App;
