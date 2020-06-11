import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.SignInMoDal';

export default defineMessages({
  SignIn: {
    id: `${scope}.SignIn`,
    defaultMessage: "Sign in ",
  },
  SignUp: {
    id: `${scope}.SignUp`,
    defaultMessage: 'Sign up',
  },
  SignUpSuccess: {
    id: `${scope}.SignUpSuccess`,
    defaultMessage: 'Sign Up Success',
  },
  LoginNow: {
    id: `${scope}.LoginNow`,
    defaultMessage: 'Login Now',
  },
  No: {
    id: `${scope}.No`,
    defaultMessage: 'No',
  },
});
