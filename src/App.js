import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import User from "./user/pages/Users";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import NewPlaces from "./places/pages/NewPlace";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact component={User} />
          <Route path="/places/new" exact component={NewPlaces} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
