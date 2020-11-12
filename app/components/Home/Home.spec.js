import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";
import { findByTestAttr } from "../../utils/test";

describe("Home render", () => {
  const component = setUp();
});

function setUp() {
  return shallow(<Home />);
}
