import { CardGroup, Header, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Thought from './Thought';

export default function Thoughts({ thoughts }) {
  return (
    <div>
      <Header as="h2" content="Latest Thoughts" />
      {thoughts ? (
        <CardGroup>
          {thoughts.map(thought => (
            <Thought key={thought._id} thought={thought} />
          ))}
        </CardGroup>
      ) : (
        <Loader content="Loading" />
      )}
    </div>
  );
}

Thoughts.propTypes = {
  thoughts: PropTypes.array,
};
