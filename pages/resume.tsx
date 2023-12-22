import Image from 'next/image';
import React from 'react';

const Resume = () => {
  return (
    <div className="d-flex justify-content-center">
      <Image src={'/assets/engcv.png'} width={800} height={1036} alt="Resume" />
    </div>
  );
};

export default Resume;
