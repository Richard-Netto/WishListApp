import React from 'react';
import { ButtonSignIn, ButtonText, SignInView } from './styles';

import authService from '../../services/auth';

const SignIn: React.FC = () => {
  const handleSignIn = async () => {
    authService().then(response => {
      console.log(response);
    });
  };

  return (
    <SignInView>
      <ButtonSignIn onPress={handleSignIn}>
        <ButtonText>Sign In</ButtonText>
      </ButtonSignIn>
    </SignInView>
  );
};

export default SignIn;
