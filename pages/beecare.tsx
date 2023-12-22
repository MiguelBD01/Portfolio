import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';

const BeeCareIA = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-8">
          <h1 className="mb-3">BeeCare-IA</h1>
          <h3 className="mb-3">Overview</h3>
          <p>
            Social media platform centered around bee conservation and
            enthusiast engagement allowing users to share pictures of bees,
            locations and descriptions with the help of articial
            intelligence.The site also maps these bee sightings, allowing users
            to explore bee locations shared by others using the Google Maps API.
            Users were able to see fun facts and information about bees.
          </p>
          <h3 className="mb-3">Responsibilites</h3>
          <ul>
            <li>
              Integrated interactive forms to empower user engagement, enabling
              submission of feedback, trivia questions, and additional
              information related to bee observations employing the HTML, CSS
              with Bootstrap framework and Javascript technologies.
            </li>
            <li>
              Collaborated with UI/UX teams to conceptualize and create visually
              appealing and informative screens dedicated to showcasing
              educational fun facts about bees.
            </li>
            <li>
              Contributed to the conceptualization and implementation of the
              database schema with MySQL
            </li>
            <li>
              Established and maintained relationships between database entities
              using Django’s ORM, facilitating data retrieval and manipulation.
            </li>
            <li>
              Utilized backend technologies with Django framework to seamlessly
              connect the user forms with the platform&apos;s backend
              infrastructure.
            </li>
            <li>
              Led the training and refinement of an artificial intelligence
              model with Teachable Machine curating datasets of bee images.
            </li>
          </ul>
          <h3>Images of project</h3>
          <h5 className="mt-2">Home page</h5>
          <Image
            src="/assets/InicioBeeCare.jpeg"
            className="card-img-top"
            width={1356}
            height={1300}
            alt="HomeBeecare"
          />
          <h5 className="mt-5">Wiki page</h5>
          <Image
            src="/assets/WikiBeeCare.jpeg"
            className="card-img-top"
            width={1356}
            height={1300}
            alt="WikiBeecare"
          />
          <h5 className="mt-5">Sightings page</h5>
          <Image
            src="/assets/SightingsBeeCare.jpeg"
            className="card-img-top"
            width={1356}
            height={1500}
            alt="SightingsBeecare"
          />
        </div>
        <div className="col-12 col-md-4">
          <div className="card p-3 mt-5 mt-md-0">
            <h4 className="mb-3 text-center">Technologies Used</h4>
            <p>
              <RiRadioButtonFill />
              HTML
            </p>
            <p>
              <RiRadioButtonFill />
              CSS
            </p>
            <p>
              <RiRadioButtonFill />
              Javascript
            </p>
            <p>
              <RiRadioButtonFill />
              Django
            </p>
            <p>
              <RiRadioButtonFill />
              Microsoft SQL Server
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeeCareIA;
