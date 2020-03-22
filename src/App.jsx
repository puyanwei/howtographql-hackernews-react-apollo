import React from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
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
        <Route exact path="/" component={LinkList} />
        <Route exact path="/create" component={CreateLink} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </div>
  </div>
);

export default App;
