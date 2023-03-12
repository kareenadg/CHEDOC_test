import { createContext, useContext, useState } from 'react';

export const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
  const [page, setPage] = useState('');

  return (
    <PageContext.Provider value={{ page, setPage }}>{children}</PageContext.Provider>
  );
};

export const usePage = () => {
  return useContext(PageContext);
};
