import "./App.css";

import { Component } from "react";
import { NavBar } from "./components/layout/NavBar";
import PropTypes from "prop-types";
import { Search } from "./components/users/Search";
import { Users } from "./components/users/Users";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }
  //*** search github users */
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Search searchUsers={this.searchUsers} />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
