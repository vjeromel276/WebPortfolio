import GithubContext from "../../context/github/githubContext";
import { Link } from "react-router-dom";

export const UserItem = () => {
  const githubContext = GithubContext();
  const { user } = githubContext();
  const { id, avatar_url, login } = user;
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
        <Link to={`/user/${login}`}>
          <div className="btn btn-dark btn-sm my1">{"More..."}</div>
        </Link>
      </div>
    </div>
  );
};
