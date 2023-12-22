import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div
      id="projects"
      className="container py-5 my-5"
      style={{ height: '100vh' }}
    >
      <div className="py-5">
        <h3 className="text-primary">Projects</h3>
        <h1>What I&apos;ve worked on</h1>
      </div>
      <div className="row g-4 align-items-center justify-content-around py-2">
        <div className="col">
          <div
            className="card"
            style={{
              width: '23rem',
              height: '29rem',
            }}
          >
            <Image
              src="/assets/jointech.png"
              className="card-img-top"
              width={400}
              height={150}
              alt="..."
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">JointechHRM (Ongoing)</h5>
              <p className="card-text">
                As part of an ongoing internship, currently contributing to
                development of a comprehensive Human Resource Management (HRM)
                system with an integrated employee portal. This system aims to
                centralize and streamline various HR processes while empowering
                employees with self-service functionalities.
              </p>
              <Link href="/jointechhrm" className="btn btn-primary mt-auto">
                More info
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card"
            style={{
              width: '23rem',
              height: '29rem',
            }}
          >
            <Image
              src="/assets/beecare.png"
              className="card-img-top"
              width={500}
              height={100}
              alt="..."
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">BeeCare-IA</h5>
              <p className="card-text">
                Contributed to development of website ‘BeeCare-IA’, a social
                media platform centered around bee conservation and enthusiast
                engagement allowing users to share pictures of bees, locations
                and descriptions with the help of articial intelligence.
              </p>
              <Link href="/beecare" className="btn btn-primary mt-auto">
                More info
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card"
            style={{
              width: '23rem',
              height: '29rem',
            }}
          >
            <Image
              src="/assets/autopodium.png"
              className="card-img-top"
              width={400}
              height={150}
              alt="..."
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Autopodium</h5>
              <p className="card-text">
                Took part in the development of AutoPodium, a windows
                application designed to streamline and automate administrative
                tasks within a car dealership environment, facilitating
                employees&apos; management of car inventory through intuitive
                and efficient tools.
              </p>
              <Link href="/autopodium" className="btn btn-primary mt-auto">
                More info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
