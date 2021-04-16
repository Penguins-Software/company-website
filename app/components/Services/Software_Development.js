import React from 'react';
import PropTypes from 'prop-types';

import Points from './Software_Development/Points';

const Software_Development = ({ data }) => (
  <div className="Software_Development">
    <div className="link-to" id="Software Development" />
    <div className="title">
      <h3>Software Development</h3>
    </div>
    {data.map((degree) => (
      <Points
        data={degree}
      />
    ))}
  </div>
);

Software_Development.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    Points: PropTypes.arrayOf(PropTypes.string).isRequired
  })),
};

Software_Development.defaultProps = {
  data: [],
};


export default Software_Development;
