import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Penguins Software</Link></h2>
          {/* <p>Software and technical support at your flippertips.</p> */}
        </div>
      </header>
      <p> 
        A software startup dedicated to developing custom solutions for small businesses.
      </p>
    </article>
  </Main>
);

export default Index;
