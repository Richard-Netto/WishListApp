import React from 'react';
import { ButtonSignIn, ButtonText, SignInView } from './styles';

const SignIn: React.FC = () => {
  return (
    <SignInView>
      <ButtonSignIn onPress={() => {}}>
        <ButtonText>Sign In</ButtonText>
      </ButtonSignIn>
    </SignInView>
  );
};

export default SignIn;
