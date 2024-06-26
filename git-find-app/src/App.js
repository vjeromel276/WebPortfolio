import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { About } from "./components/pages/About";
import { Alert } from "./components/layout/Alert";
import AlertState from "./context/alert/AlertState";
import GithubState from "./context/github/GithubState";
import { Home } from "./components/pages/Home";
import { NavBar } from "./components/layout/NavBar";
import { NotFound } from "./components/pages/NotFound";
import { User } from "./components/users/User";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <NavBar />
            <Alert />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
