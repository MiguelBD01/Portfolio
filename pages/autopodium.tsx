import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';

const Autopodium = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-8">
          <h1 className="mb-3">Autopodium</h1>
          <h3 className="mb-3">Overview</h3>
          <p>
            Windows application designed to streamline and automate
            administrative tasks within a car dealership environment,
            facilitating employees&apos; management of car inventory through
            intuitive and efficient tools.
          </p>
          <h3 className="mb-3">Responsibilites</h3>
          <ul>
            <li>
              Designed user-friendly forms using C# to capture and store
              essential details, and pertinent vehicle, client and vendor
              information, facilitating seamless entry, registration, deletion,
              and updating of records within the dealership inventory.
            </li>
            <li>
              Maintained and updated documentation in sync with the evolving
              functionalities and enhancements made to the AutoPodium
              application. Ensured that documentation remained current,
              accurate, and aligned with the latest software iterations.
            </li>
          </ul>
          <h3>Project showcase</h3>
          <h5 className="mt-2">Home screen</h5>
          <Image
            src="/assets/HomeAutopodium.jpg"
            className="card-img-top"
            width={1000}
            height={500}
            alt="HomeBeecare"
          />
          <h5 className="mt-5">Cars screen</h5>
          <Image
            src="/assets/CarsAutopodium.jpg"
            className="card-img-top"
            width={1000}
            height={500}
            alt="WikiBeecare"
          />
          <h5 className="mt-5">Clients screen</h5>
          <Image
            src="/assets/ClientsAutopodium.jpg"
            className="card-img-top"
            width={1000}
            height={500}
            alt="SightingsBeecare"
          />
          <h5 className="mt-5">Vendors screen</h5>
          <Image
            src="/assets/VendorAutopodium.jpg"
            className="card-img-top"
            width={1000}
            height={500}
            alt="SightingsBeecare"
          />
        </div>
        <div className="col-12 col-md-4">
          <div className="card p-3 mt-5 mt-md-0">
            <h4 className="mb-3 text-center">Technologies Used</h4>
            <p>
              <RiRadioButtonFill />
              C#
            </p>
            <p>
              <RiRadioButtonFill />
              Microsoft Management Studio
            </p>
            <p>
              <RiRadioButtonFill />
              SAP Crystal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Autopodium;
