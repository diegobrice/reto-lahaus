import { useState, useEffect, useMemo, useContext, createContext } from 'react';
import { useFetch } from '../hooks/useFetch';
// import { emptyFavoriteList } from '../MockData';
import { getFormattedFavorites } from '../utils/formatter';

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const API_URL = 'https://lh-real-estates-challenge-api.herokuapp.com/real-estates';
  const [appState, setAppState] = useState({});
  const { data, isLoading } = useFetch(API_URL);

  useEffect(() => {
    if (data) {
      const list = data.included;
      const formattedFavorites = getFormattedFavorites(data);
      const state = {
        user: {},
        list,
        favorites: [ ...formattedFavorites],
      };
      setAppState(state);
    }
  }, [data]);

  const values = useMemo(
    () => ({
      appState,
      isLoading,
      setAppState,
    }),
    [appState, isLoading]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    console.error('Error deploying App Context!');
  }
  return context;
}

export default useAppContext;
