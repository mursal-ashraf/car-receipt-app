import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import './App.css';
import { AppStateContext } from './Context/context';
import { AppRouter } from './Router/AppRouter';
import { createAppState } from './state/appState';

export const App = () => {
  const appState = useLocalStore(createAppState);
  return (
    <div id="main">
      <AppStateContext.Provider value={appState}>
        <AppRouter />
      </AppStateContext.Provider>
    </div>
  );
};
