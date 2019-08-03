/**
 * 어떤 라우터들을 보여줄지 다루는 Component
 */
import React from "react";
import PropTypes from "prop-types";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "src/routes/Feed.js";
import Auth from "src/routes/Auth.js";

const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={Feed} />
  </>
);
const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={Auth} />
  </>
);

const AppRouter = ({ isLoggedIn }) => (
  <Router>
    <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
  </Router>
);

Router.PropTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
