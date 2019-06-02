import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function Thought({ thought }) {
  return (
    <Card>
      <Card.Content>{thought.message}</Card.Content>
      <Card.Meta>by {thought.author}</Card.Meta>
    </Card>
  );
}

Thought.propTypes = {
  thought: PropTypes.object.isRequired,
};
