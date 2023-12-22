import About from '@/components/About';
import { Main } from '@/components/Main';
import Projects from '@/components/Projects';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <Main />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
