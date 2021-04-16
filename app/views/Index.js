import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Penguins Software</Link></h2>
          <p>Software and technical support at your flippertips.</p>
        </div>
      </header>
      <p> 
        Providing Software Development, IT Support, and Security Consultations to NWA.
      </p>
    </article>
  </Main>
);

export default Index;
