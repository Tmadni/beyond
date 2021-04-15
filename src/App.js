import React from "react";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Page1} />
      <Route path="/page1" exact component={Page1} />
      <Route path="/page2" exact component={Page2} />

    </Switch>
  </BrowserRouter>
);

export default App;
