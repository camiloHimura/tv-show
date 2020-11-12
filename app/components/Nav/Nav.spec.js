import React from "react";
import { shallow } from "enzyme";
import Nav from "./Nav";
import { findByTestAttr } from "../../utils/test";

describe("Nav render", () => {
  const component = setUp();

  it("render link 'Home'", () => {
    expect(findByTestAttr(component, "link-home").text()).toEqual("Home");
  });

  it("render link 'Details'", () => {
    expect(findByTestAttr(component, "link-details").text()).toEqual("Details");
  });
});

function setUp() {
  return shallow(<Nav />);
}
