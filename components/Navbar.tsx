import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-4">
            <li className="nav-item ms-auto">
              <Link className="nav-link" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item ms-auto">
              <Link className="nav-link" href="/#about">
                About
              </Link>
            </li>
            <li className="nav-item ms-auto">
              <Link className="nav-link" href="/#projects">
                Projects
              </Link>
            </li>
            <li className="nav-item ms-auto">
              <Link className="nav-link" href="/resume">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
