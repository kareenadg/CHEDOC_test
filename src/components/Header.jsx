import './Header.css';

import { NavLink, useNavigate } from 'react-router-dom';

import { usePage } from '../context/pageContext';

const Header = () => {
  const { page } = usePage();
  const navigate = useNavigate();
  const gohome = () => {
    navigate('/');
  };

  return (
    <div className="header">
      <div className="navbar">
        <h1>DEMO Streaming</h1>
        <div className="navlink">
          <NavLink to="/login">Log in</NavLink>
          <button onClick={() => gohome()}>Start your free trial</button>
        </div>
      </div>
      <div className="popular">
        {(page === 'Home' && <h2>Popular Titles</h2>) ||
          (page === 'Series' && <h2>Popular Series</h2>) ||
          (page === 'Movies' && <h2>Popular Movies</h2>) ||
          (page === 'Login' && <h2>Log in</h2>) || (page === 'Not Found' && <h2>Not Found</h2>)}
      </div>
    </div>
  );
};

export default Header;
