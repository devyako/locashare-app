import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from "./user/pages/Users";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={User} />
    </Router>
  );
};

export default App;
