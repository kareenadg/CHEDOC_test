import './App.css';

import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Grid from './ui/Grid';

const App = () => {
  return (
    <div className="App">
      <Grid>
        <Header />
        <Outlet />
        <Footer />
      </Grid>
    </div>
  );
};

export default App;
