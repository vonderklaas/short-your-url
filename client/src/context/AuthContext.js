import { createContext } from 'react';

function nop() {}

export const AuthContext = createContext({
  token: null,
  userId: null,
  login: nop,
  logout: nop,
  isAuthenticated: false,
});
