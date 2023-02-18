import React from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import './App.css';
import { AppStateContext } from './Context/context';
import { AppRouter } from './Router';
import { createAppState } from 'state';

export const App: React.FC = () => {
  const appState = useLocalObservable(createAppState);
  return (
    <div id="main">
      <AppStateContext.Provider value={appState}>
        <AppRouter />
      </AppStateContext.Provider>
    </div>
  );
};
