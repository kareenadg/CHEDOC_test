import './Footer.css';

import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <a
              href="https://www.chedoc.com/terminos-y-condiciones"
              target="_blank"
              rel="noreferrer"
            >
              Terms and Conditions
            </a>
          </li>
          <li>
            <a
              href="https://www.chedoc.com/politica-de-privacidad"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://www.chedoc.com/" target="_blank" rel="noreferrer">
              Collection Statement
            </a>
          </li>
          <li>
            <a
              href="https://www.chedoc.com/sobre-nosotros"
              target="_blank"
              rel="noreferrer"
            >
              Help
            </a>
          </li>
          <li>
            <a href="https://www.chedoc.com/perfil" target="_blank" rel="noreferrer">
              Manage Account
            </a>
          </li>
        </ul>
      </div>
      <p>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
      <div className="icons">
        <div className="social-media">
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img
                  src="../../public/assets/social/facebook-white.svg"
                  alt="Facebook icon"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img
                  src="../../public/assets/social/twitter-white.svg"
                  alt="Twitter icon"
                />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img
                  src="../../public/assets/social/instagram-white.svg"
                  alt="Instagram icon"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="store">
          <ul>
            <li>
              <a
                href="https://www.apple.com/es/app-store/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="../../public/assets/store/app-store.svg" alt="App Store img" />
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/games?hl=es_419&gl=US"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../../public/assets/store/play-store.svg"
                  alt="Play Store img"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.microsoft.com/es-ad/store/b/home"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../../public/assets/store/windows-store.svg"
                  alt="Windows Store img"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
