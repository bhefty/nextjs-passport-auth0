import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import { Container } from 'semantic-ui-react';
import Thoughts from '../components/Thoughts';

function Index(props) {
  const { thoughts } = props;
  return (
    <Container>
      <Thoughts thoughts={thoughts} />
    </Container>
  );
}

Index.getInitialProps = async ({ req }) => {
  const baseURL = req ? `${req.protocol}://${req.get('Host')}` : '';
  const res = await fetch(`${baseURL}/api/thoughts`);

  return {
    thoughts: await res.json(),
  };
};

Index.propTypes = {
  thoughts: PropTypes.array,
};

export default Index;
