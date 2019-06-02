import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

const Picture = styled.img`
  border-radius: 50%;
  border: 3px solid #fff;
  width: 100px;
`;

function Profile({ user }) {
  return (
    <div>
      <Header as="h2">
        <Picture src={user.picture} alt={user.displayName} /> Hello,{' '}
        {user.displayName}
      </Header>
      <p>This is what we know about you:</p>
      <ul>
        {Object.keys(user).map(key => (
          <li key={key}>
            {key}: {user[key].toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Profile;
