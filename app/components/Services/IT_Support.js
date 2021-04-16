import React from 'react';
import PropTypes from 'prop-types';

import Points from './IT_Support/Points';

const IT_Support = ({ data }) => (
  <div className="IT_Support">
    <div className="link-to" id="IT_Support" />
    <div className="title">
      <h3>IT Support</h3>
    </div>
    {data.map((job) => (
      <Points
        data={job}
      />
    ))}
  </div>
);

IT_Support.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    points: PropTypes.arrayOf(PropTypes.string)
  })),
};

IT_Support.defaultProps = {
  data: [],
};


export default IT_Support;
