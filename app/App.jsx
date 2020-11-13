import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import Loader from "./components/generals/Loader";

const Home = React.lazy(() => import("./components/pages/Home"));
const Details = React.lazy(() => import("./components/pages/Details"));

function App() {
  return (
    <div className="TvShow">
      <Router>
        <div className="container">
          <Suspense fallback={<Loader isVisible={true} />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/details/:id" component={Details} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
