import './Home.css';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { usePage } from '../context/pageContext';

const Home = () => {
  const { page, setPage } = usePage();
  useEffect(() => {
    setPage('Home');
  }, []);

  return (
    <main className="home">
      {page && (
        <div className="populartitles">
          <figure>
            <Link to="/series">
              <img src="../../public/assets/placeholder.png" alt="Clapperboard icon" />
              <p>Series</p>
            </Link>
            <h3>Popular Series</h3>
          </figure>
          <figure>
            <Link to="/movies">
              <img src="../../public/assets/placeholder.png" alt="Clapperboard icon" />
              <p>Movies</p>
            </Link>
            <h3>Popular Movies</h3>
          </figure>
        </div>
      )}
    </main>
  );
};

export default Home;
