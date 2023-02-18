import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { Routes } from '../../Router/routes';

export const Home: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link to={Routes.SellerDetails}>Testing wizard</Link>
      </header>
    </div>
  );
};
