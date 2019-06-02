import { Form, Button, Container } from 'semantic-ui-react';
import Router from 'next/router';

const { useState } = require('react');

export default function ShareThought() {
  const [message, setMessage] = useState('');

  async function submit(event) {
    event.preventDefault();
    await fetch('api/thoughts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
      }),
    });
    Router.push('/');
  }

  return (
    <Container>
      <Form onSubmit={submit}>
        <Form.Group>
          <label>What is in your mind?</label>
          <Form.Input
            type="text"
            placeholder="Say something"
            onChange={e => setMessage(e.target.value)}
            value={message}
          />
        </Form.Group>
        <Button positive type="submit" content="Share" />
      </Form>
    </Container>
  );
}
