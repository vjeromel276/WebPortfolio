import "./App.css";

import { Component } from "react";
import { NavBar } from "./components/layout/NavBar";
import { UserItem } from "./components/users/UserItem";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <UserItem />
      </>
    );
  }
}

export default App;
