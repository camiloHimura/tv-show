import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link data-test="link-home" to="/">
        Home
      </Link>
      <Link data-test="link-details" to="/details">
        Details
      </Link>
    </nav>
  );
}

Nav.propTypes = {};
