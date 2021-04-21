import React from 'react';
import PropTypes from 'prop-types';
import { Image, List } from 'semantic-ui-react'

const Points = ({ data }) => (
  <article className="points-container">
    <ul className="points">
      {data.points.map((point) => (
        <List horizontal ordered>
          <List.Item>
            <List.Content>
            <Image src={`${BASE_PATH}` + point.img} size='small' circular/>
              <List.Header>{point.text}</List.Header>
            </List.Content>
          </List.Item>
        </List>
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
