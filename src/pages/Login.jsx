import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePage } from '../context/pageContext';
import { useUser } from '../context/userContext';
import './Login.css';

const Login = () => {
  const { user, setUser } = useUser();
  const { page, setPage } = usePage();
  const input = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setPage('Login');
  }, []);

  return (
    <main className="login">
      <div>
        <h2>Please, log in first</h2>
        <input type="text" ref={input} defaultValue={user} placeholder="username" />
        <button
          onClick={() => {
            setUser(input.current.value);
            localStorage.setItem('user', input.current.value);
            navigate('/');
          }}
        >
          Login
        </button>
      </div>
    </main>
  );
};

export default Login;
