import React from 'react';
import ReactDOM from 'react-dom'
import { moduleLoader } from '../../../utils'

const Setting = () => {
  return (
    <div>
      <h1>Setting</h1>
    </div>
  );
}

moduleLoader({
  id: 'setting',
  uif: 'react',
  component: <Setting />,
  // appContainer: '#container',
  dom: ReactDOM,
});
