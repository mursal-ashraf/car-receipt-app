import { isNil } from 'lodash';
import React from 'react';
import { AppState } from 'state';

export const AppStateContext = React.createContext<AppState | null>(null);

export const useAppStateContext = () => {
  const appStateStore = React.useContext(AppStateContext);
  if (isNil(appStateStore))
    throw new Error(
      'useAppStateContext must be used within a AppStateContext.Provider'
    );

  return appStateStore;
};
