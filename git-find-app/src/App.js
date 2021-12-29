import "./App.css";

import { Alert } from "./components/layout/Alert";
import { Component } from "react";
import { NavBar } from "./components/layout/NavBar";
import { Search } from "./components/users/Search";
import { Users } from "./components/users/Users";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  //*** search github users */
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  //**  Clear users from state */
  clearUsers = () => this.setState({ users: [], loading: false });
  //**  show alert for empty search */
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <NavBar />
        <Alert alert={this.state.alert} />
        <Search
          showClear={users.length > 0 ? true : false}
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          setAlert={this.setAlert}
        />
        <Users loading={loading} users={users} />
      </div>
    );
  }
}

export default App;
