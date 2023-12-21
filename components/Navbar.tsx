const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item ms-auto">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item ms-auto">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item ms-auto">
              <a className="nav-link" href="#">
                Resume
              </a>
            </li>
            <li className="nav-item ms-auto">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
