import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

// Featured
import Index from './views/Index';
import Projects from './views/Projects';//Services
import Services from './views/Services';
import Stats from './views/Stats';//Modify or remove
import Contact from './views/Contact';
import About from './views/About';//Remove

import NotFound from './views/NotFound';

// All of our CSS
import './static/css/main.scss';

ReactDOM.render(
  <Router basename={BASE_PATH}>
    <Switch>
      <Route exact path="/" component={Index} />
      {/* <Route path="/projects" component={Projects} />
      <Route path="/stats" component={Stats} /> */}
      <Route path="/contact" component={Contact} />
      <Route path="/Services" component={Services} />
      {/* <Route path="/about" component={About} /> */}
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
