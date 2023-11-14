import Button from '@/components/UI/Button';
import LoginButton from '@/components/UI/LoginButton';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className='h-full text-white flex justify-center items-center'>
      <LoginButton />
      {/* <Button mode='primary' title='Test'>
          Play now
        </Button> */}
    </div>
  );
};

export default LandingPage;
