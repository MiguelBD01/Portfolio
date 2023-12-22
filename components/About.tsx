import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="container py-5 my-5" style={{ height: '100vh' }}>
      <div className="row g-4 align-items-center justify-content-around py-5">
        <div className="col">
          <h3 className="text-primary">About</h3>
          <h1>Who I Am</h1>
          <p>Web developer intern</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor, nunc id ultrices tincidunt, nisl nunc lacinia nunc, ac
            lacinia nunc nisl id nunc. Sed vitae nunc auctor, tincidunt nunc id,
            lacinia nunc. Sed vitae nunc auctor, tincidunt nunc id, lacinia
            nunc.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <Image
            src={'/assets/Pfp.jpg'}
            width={350}
            height={350}
            alt="profile picture"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
