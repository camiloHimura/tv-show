import React from "react";
import { shallow } from "enzyme";
import Details from "./Details";
import { findByTestAttr } from "../../utils/test";

describe("Details render", () => {
  const component = setUp();
});

function setUp() {
  return shallow(<Details />);
}
