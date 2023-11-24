// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';
import './styles.css'; // 추가된 부분

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <HelloWorld />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
