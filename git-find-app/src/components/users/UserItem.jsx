import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { User } from "./User";

export const UserItem = ({
  user,
  user: { id, avatar_url, login, html_url },
}) => {
  return (
    <div key={id} className="card text-center">
      <img
        className="round-img"
        src={avatar_url}
        alt="user avatar"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to="/user">
          <div className="btn btn-dark btn-sm my1">{"More..."}</div>
        </Link>
      </div>
    </div>
  );
};

//^^^^^^^ This is how you make define props tyoes ^^^^^^^^^\\
UserItem.propType = {
  user: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired,
};
