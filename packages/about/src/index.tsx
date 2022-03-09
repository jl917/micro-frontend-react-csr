import React from 'react';
import ReactDOM from 'react-dom'
import { moduleLoader } from '../../../utils'

const About = () => {
  return (
    <div>
      <h1>about</h1>
    </div>
  );
}

moduleLoader('about', <About />, ReactDOM);
