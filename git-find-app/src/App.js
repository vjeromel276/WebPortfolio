import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { About } from "./components/pages/About";
import { Alert } from "./components/layout/Alert";
import AlertState from "./context/alert/AlertState";
import GithubState from "./context/github/GithubState";
import { NavBar } from "./components/layout/NavBar";
import { Search } from "./components/users/Search";
import { User } from "./components/users/User";
import { Users } from "./components/users/Users";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <NavBar />
            <Alert />
            <Switch>
              <Route exact path="/">
                <>
                  <Search />
                  <Users />
                </>
              </Route>
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
