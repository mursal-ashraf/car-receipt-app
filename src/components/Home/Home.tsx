import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link to={'/form'}>Testing</Link>
      </header>
    </div>
  );
};
