import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { About } from "./components/pages/About";
import { Alert } from "./components/layout/Alert";
import { Component } from "react";
import { NavBar } from "./components/layout/NavBar";
import { Search } from "./components/users/Search";
import { User } from "./components/users/User";
import { Users } from "./components/users/Users";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
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
  //*** get individual github users */
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ user: res.data, loading: false });
  };
  //*** get individual github users repos*/
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_idclient_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ repos: res.data, loading: false });
  };
  //**  Clear users from state */
  clearUsers = () => this.setState({ users: [], loading: false });
  //**  show alert for empty search */
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { user, users, loading, repos } = this.state;

    return (
      <Router>
        <div className="App">
          <NavBar />
          <Alert alert={this.state.alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <>
                  <Search
                    showClear={users.length > 0 ? true : false}
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </>
              )}
            />
            <Route exact path="/about">
              <About />
            </Route>
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  getUser={this.getUser}
                  getUserRepos={this.getUserRepos}
                  repos={repos}
                  user={user}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
