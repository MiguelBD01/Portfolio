import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="container py-5 my-5" style={{ height: '100vh' }}>
      <div className="row g-4 align-items-center justify-content-around py-5">
        <div className="col">
          <h3 className="text-primary">About</h3>
          <h1>Who I Am</h1>
          <p>
            I am a Computer Systems Engineering student in my final semester at
            Instituto Tecnológico de Tijuana, ever since I was a kid I was drawn
            to computers and their inner workings, specially software-wise. My
            initiation into software development dates back to 2016 during high
            school, where I delved into programming basics and began crafting my
            initial software projects.
          </p>
          <p>
            Throughout my academic journey I took on various subjects and topics
            ranging from data structures, databases, and software engineering to
            networking, operating systems, web and mobile development, and
            artificial intelligence that allowed me to gain a comprehensive
            understanding of these fields and decide my professional path.
          </p>
          <p>
            I enjoy web development in particular due to the logic and
            challenges of backend development and the room for creativity that
            you can have in frontend development. Collaboration and teamwork are
            elements I deeply value. I find gratification in putting the pieces
            together to build something that someone else will experience. My
            portfolio showcases projects undertaken within a collaborative
            developer team during my college journey where I learned the most
            about collaboration and communication in a software development
            environment as well as web development skills in general.
          </p>
          <p>
            Currently, I am doing my internship at Jointech where I&apos;ve been
            continously learning every single day and reinforcing the web
            development skills learned at college.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <Image
            src={'/assets/profile.jpg'}
            width={350}
            height={600}
            alt="profile picture"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
