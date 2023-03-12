import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { PageContextProvider } from './context/pageContext';
import { UserContextProvider } from './context/userContext';
import Home from './pages/Home';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import Series from './pages/Series';
import Login from './pages/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <UserContextProvider>
        <PageContextProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="/series" element={<Series />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </PageContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
