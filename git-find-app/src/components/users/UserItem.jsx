import PropTypes from "prop-types";

export const UserItem = ({ user: { id, avatar_url, login, html_url } }) => {
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
        <a href={html_url} className="btn btn-dark btn-sm my1">
          {"More..."}
        </a>
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
