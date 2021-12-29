import "../../App.css";

import PropTypes from "prop-types";

export const NavBar = ({ title, icon }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
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
