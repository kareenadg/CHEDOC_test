import './Series.css';

import { useEffect, useState } from 'react';

import { usePage } from '../context/pageContext';

const Series = () => {
  const { page, setPage } = usePage();
  const [series, setSeries] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getAllSeries = async () => {
    const data = await fetch(
      'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
    );
    const res = await data.json();
    const all = await res.entries;
    const allSeries = all
      .filter((it) => it.programType === 'series' && it.releaseYear >= 2010)
      .slice(0, 20)
      .sort((a, b) => {
        return a.title
          .toString()
          .localeCompare(b.title.toString(), 'en', { numeric: true });
      });
    setSeries(allSeries);
  };

  useEffect(() => {
    setLoaded(true);
    setPage('Series');
    getAllSeries();
  }, []);

  return (
    <main className="series">
      {loaded ? (
        page &&
        series.map((ser) => (
          <div key={ser.id}>
            <figure>
              <img src={ser.images['Poster Art'].url} alt={ser.title} />
            </figure>
            <button onClick={(ev) => (ev.target.nextSibling.open = true)}>
              {ser.title}
            </button>
            <dialog>
              <button onClick={(ev) => (ev.target.parentNode.open = false)}>X</button>
              <div className="dialogcard">
                <div className="dialogimg">
                  <img src={ser.images['Poster Art'].url} alt={ser.title} />
                </div>
                <div className="dialoginfo">
                  <h2>{ser.title}</h2>
                  <h3>{ser.releaseYear}</h3>
                  <p>{ser.description}</p>
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

export default Series;
