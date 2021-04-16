import React from 'react';
import PropTypes from 'prop-types';

import Points from './Courses/Points';

const Security_Consultation = ({ data }) => (
  <div className="Security_Consultation">
    <div className="link-to" id="Security_Consultation" />
    <div className="title">
      <h3>Security Consultation</h3>
    </div>
    {data.map((job) => (
      <Points
        data={job}
      />
    ))}
  </div>
);

Security_Consultation.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    univerity: PropTypes.string,
  })),
};

Security_Consultation.defaultProps = {
  data: [],
};

export default Security_Consultation;
