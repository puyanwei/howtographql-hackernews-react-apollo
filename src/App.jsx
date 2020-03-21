import React from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import CreateLink from "./pages/CreateLink";
import LinkList from "./pages/LinkList";
import "./styles/App.css";

const App = () => (
  <div className="center w85">
    <Header />
    <div className="ph3 pv1 background-gray">
      <Switch>
        <Route exact path="/" component={LinkList} />
        <Route exact path="/create" component={CreateLink} />
      </Switch>
    </div>
  </div>
);

export default App;
