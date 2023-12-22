import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';

const JointechHRM = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-8">
          <h1 className="mb-3">JointechHRM</h1>
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
              Working with UX/UI team to implement designs and UI elements into
              functional user interfaces to achieve a consistent and intuitive
              user experience utilizing NextJS and Mantine component library.
            </li>
            <li>
              Ensuring the responsiveness and compatibility of the frontend
              interfaces across various devices and browsers
            </li>
            <li>
              Utilizing APIs and data endpoints provided by the backend to fetch
              and display dynamic content within the frontend UI components.
            </li>
            <li>
              Engaged in refactoring existing frontend components and codebase
              to improve performance, scalability, and maintainability.
              Implementing best practices and design patterns to optimize the
              user interface and enhance overall system responsiveness.
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4">
          <div className="card p-3 mt-5 mt-md-0">
            <h4 className="mb-3 text-center">Technologies Used</h4>
            <p>
              <RiRadioButtonFill />
              NextJS
            </p>
            <p>
              <RiRadioButtonFill />
              Typescript
            </p>
            <p>
              <RiRadioButtonFill />
              MongoDB
            </p>
            <p>
              <RiRadioButtonFill />
              Mongoose
            </p>
            <p>
              <RiRadioButtonFill />
              Mantine
            </p>
            <p>
              <RiRadioButtonFill />
              NextAuth.js
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JointechHRM;
