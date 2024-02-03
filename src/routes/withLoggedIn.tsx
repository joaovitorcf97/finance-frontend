import React, { useContext } from 'react';
import { UserContext } from '../hooks/UserContext';
import { withCondition } from './withCondition';

export function WithLoggedIn(Component: React.FunctionComponent) {
  const { loggedIn } = useContext(UserContext);

  return withCondition(Component, loggedIn, '/login');
}
