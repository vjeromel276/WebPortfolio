import PropTypes from "prop-types";
import { Spinner } from "../layout/Spinner";
import { UserItem } from "./UserItem";

export const Users = ({ users, loading }) => {
  console.log(loading);
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

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
