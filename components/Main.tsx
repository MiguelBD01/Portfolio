import { FaLinkedin } from 'react-icons/fa6';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

export const Main = () => {
  return (
    <div
      id="home"
      className="h-100 d-flex flex-column align-items-center justify-content-center text-center"
    >
      <p>WELCOME TO MY PORTFOLIO!</p>
      <h1>Hi, I&apos;m Miguel</h1>
      <h1>Web Developer Intern</h1>
      <p className="w-25 py-4">
        Focused and dedicated web developer intern with hands-on experience in
        frontend and backend development adept at translating design concepts
        into compatible web solutions. Excellent sense of responsibility,
        empathy, and discipline. Enthusiasm for facing new challenges.
      </p>
      <div className="d-flex justify-content-between w-25 py-5">
        <FaLinkedin size={40} />
        <FaGithub size={40} />
        <BsFillPersonLinesFill size={40} />
      </div>
    </div>
  );
};
