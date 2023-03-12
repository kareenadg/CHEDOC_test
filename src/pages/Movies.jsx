import './Movies.css';

import { useEffect, useState } from 'react';

import { usePage } from '../context/pageContext';

const Movies = () => {
  const { page, setPage } = usePage();
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getAllMovies = async () => {
    const data = await fetch(
      'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
    );
    const res = await data.json();
    const all = await res.entries;
    const allMovies = all
      .filter((it) => it.programType === 'movie' && it.releaseYear >= 2010)
      .slice(0, 20)
      .sort((a, b) => {
        return a.title
          .toString()
          .localeCompare(b.title.toString(), 'en', { numeric: true });
      });
    setMovies(allMovies);
  };

  useEffect(() => {
    setLoaded(true);
    setPage('Movies');
    getAllMovies();
  }, []);

  return (
    <main className="movies">
      {loaded ? (
        page &&
        movies.map((mov) => (
          <div key={mov.id}>
            <figure>
              <img src={mov.images['Poster Art'].url} alt={mov.title} />
            </figure>
            <button onClick={(ev) => (ev.target.nextSibling.open = true)}>
              {mov.title}
            </button>
            <dialog>
              <button onClick={(ev) => (ev.target.parentNode.open = false)}>X</button>
              <div className="dialogcard">
                <div className="dialogimg">
                  <img src={mov.images['Poster Art'].url} alt={mov.title} />
                </div>
                <div className="dialoginfo">
                  <h2>{mov.title}</h2>
                  <h3>{mov.releaseYear}</h3>
                  <p>{mov.description}</p>
                </div>
              </div>
            </dialog>
          </div>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </main>
  );
};

export default Movies;
