import React from 'react';
import PropTypes from 'prop-types';

const Points = ({ data }) => (
  <article className="points-container">
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Points.propTypes = {
  data: PropTypes.shape({
    points: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
};

export default Points;
