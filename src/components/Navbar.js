import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

export default function AppNavbar({ user }) {
  return (
    <Menu>
      <Link href="/">
        <Menu.Item as="a" header>
          Thoughts!
        </Menu.Item>
      </Link>
      {user ? (
        <>
          <Link href="/share-thought">
            <Menu.Item content="New Thought" />
          </Link>
          <Link href="/profile">
            <Menu.Item content="Profile" />
          </Link>
          <Link href="/logout">
            <Menu.Item content="Log Out" />
          </Link>
        </>
      ) : (
        <Link href="/login">
          <Menu.Item content="Log In" />
        </Link>
      )}
    </Menu>
  );
}

AppNavbar.propTypes = {
  user: PropTypes.object,
};
