import "./Header.css";

import { Forum, Person } from "@material-ui/icons";

import { IconButton } from "@material-ui/core";

export const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <Person className="header__icon_" fontSize="large" />
      </IconButton>
      <img src="logo192.png" alt="header" className="header__logo" />
      <IconButton>
        <Forum className="header__icon_" fontSize="large" />
      </IconButton>
    </div>
  );
};
