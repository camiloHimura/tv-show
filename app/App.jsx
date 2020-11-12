import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav";
import Loader from "./components/generals/Loader";

const Home = React.lazy(() => import("./components/Home"));
const Details = React.lazy(() => import("./components/Details"));

function App() {
  return (
    <div className="MyChat">
      <Router>
        <Nav name="My Chat" />
        <div className="container">
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/details" component={Details} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
