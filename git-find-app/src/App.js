import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { About } from "./components/pages/About";
import { Alert } from "./components/layout/Alert";
import GithubState from "./context/github/GithubState";
import { NavBar } from "./components/layout/NavBar";
import { Search } from "./components/users/Search";
import { User } from "./components/users/User";
import { Users } from "./components/users/Users";
import { useState } from "react";

const App = () => {
  const [alert, setAlert] = useState(null);

  //**  show alert for empty search */
  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <NavBar />
          <Alert alert={alert} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <>
                  <Search setAlert={showAlert} />
                  <Users />
                </>
              )}
            />
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/user/:login" component={User} />
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
