import GithubContext from "../../context/github/githubContext";
import { Spinner } from "../layout/Spinner";
import { UserItem } from "./UserItem";
import { useContext } from "react";

export const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  return (
    <div className="container">
      <div style={userStyle}>
        {users.map((user) =>
          !loading ? (
            <UserItem key={user.id} user={user} />
          ) : (
            <Spinner key={user.id} />
          )
        )}
      </div>
    </div>
  );
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};
