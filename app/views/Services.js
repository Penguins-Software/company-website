import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Software_Development from '../components/Services/Software_Development';
import IT_Support from '../components/Services/IT_Support';
import Security_Consultation from '../components/Services/Security_Consultation';

import References from '../components/Services/References';

import security from '../data/Services/security';
import software from '../data/Services/software';
import it_services from '../data/Services/it_services';
// import { skills, categories } from '../data/Services/skills';

const sections = [
  'Software Development',
  'IT Support',
  'Security Consultation'
];

const Services = () => (
  <Main>
    <Helmet title="Services" />
    <article className="post" id="Services">
      <header>
        <div className="title">
          <h2><Link to="/Services">Services</Link></h2>
        </div>
      </header>
      <Software_Development data={software} />
      <IT_Support data={it_services} />
      <Security_Consultation data={security} />
      {/* <References />  //Will add back in when I have references*/}

    </article>
  </Main>
);

export default Services;
