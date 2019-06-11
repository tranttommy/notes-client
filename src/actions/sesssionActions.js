import { createAction } from 'promise-middleware-redux';
import { handleAuth } from '../services/auth0';

export const [
  setSession,
  SET_SESSION,
  SET_SESSION_PENDiNG
] = createAction('SET_SESSION', handleAuth);
