import React from 'react';
import './App.scss';
import Title from '../../components/Title/Title';
import Results from '../Results/Results';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Title />
        <Results />
      </div>
    </div>
  );
}

export default App;
