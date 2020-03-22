import React from "react";
import Header from "./components/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import CreateLink from "./pages/CreateLink";
import LinkList from "./pages/LinkList";
import Login from "./pages/Login";
import Search from "./pages/Search";
import "./styles/App.css";

const App = () => (
  <div className="center w85">
    <Header />
    <div className="ph3 pv1 background-gray">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/new/1" />} />
        <Route exact path="/create" component={CreateLink} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/top" component={LinkList} />
        <Route exact path="/new/:page" component={LinkList} />
      </Switch>
    </div>
  </div>
);

export default App;
