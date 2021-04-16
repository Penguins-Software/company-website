import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar" >
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Brian Dearing</h2>
        <p><a href="mailto:brian@penguinssoftware.com">brian@penguinssoftware.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Brian. I like building things.
            I am a full-stack developer at heart and owner of Penguins Software.
      </p>
      {/* <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/Services` ? <Link to="/Services" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul> */}
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; 2021 <Link to="/">penguinssoftware.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
