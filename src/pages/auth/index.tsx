/* eslint-disable react/no-unescaped-entities */
import Container from '@/components/layouts/Container';
import SignIn from '@/modules/auth/sign-in/SignIn';
import SignUp from '@/modules/auth/sign-up/SignUp';
import { NextPage } from 'next';
import { useState } from 'react';

const Auth: NextPage = () => {
  const [login, setIsLogin] = useState<boolean>(true);
  return (
    <Container>
      <div className="w-40 px-4 py-3 bg-white radius-4 mx-auto shadow-2xl">
        {login ? (
          <>
            <SignIn />
            <p className="cls">
              Don't have account?{' '}
              <span
                className="text-700 text-primary pointer"
                onClick={(): void => setIsLogin(false)}
              >
                Create one
              </span>
            </p>
          </>
        ) : (
          <>
            <SignUp />
            <p className="cls">
              Don't have account?{' '}
              <span className="text-700 text-primary pointer">Create one</span>
            </p>
          </>
        )}
      </div>
    </Container>
  );
};

export default Auth;
