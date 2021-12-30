import "../../App.css";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const NavBar = ({ title, icon }) => {
  return (
    <nav className="navbar bg-primary">
      <Link to="/">
        <h1>
          <i className={icon} />
          {title}
        </h1>
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

//^^^^^^^^^ This is how you make default props ^^^^^^^^^^^\\
NavBar.defaultProps = {
  title: "GitHub Finder",
  icon: "fab fa-github",
};

//^^^^^^^ This is how you make define props tyoes ^^^^^^^^^\\
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
