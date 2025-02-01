import { ModeToggle } from '@/components/navbar/ModeToggle';
import './globals.css';
import React, { JSX } from 'react';

const Home: React.FC = (): JSX.Element => {
  return (
    <div className="ineed.io-home-page">
      <h1 className="text-center text-3xl font-bold text-primary">Welcome to My App</h1>
      <ModeToggle />
    </div>
  );
};

export default Home;
