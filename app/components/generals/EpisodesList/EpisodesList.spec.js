import React from "react";
import { shallow } from "enzyme";
import EpisodesList from "./EpisodesList";
import { findByTestAttr } from "../../../utils/test";

const numElements = 20;
const data = {
  id: 0,
  season: 1,
  number: 123,
  name: "test name",
};
const list = Array.from({ length: numElements }, (_, index) => ({
  ...data,
  id: index,
}));

describe("EpisodesList", () => {
  let component;

  beforeEach(() => {
    component = setUp({ list });
  });

  it("render numElements", () => {
    const loader = findByTestAttr(component, "link-episode");
    expect(loader).toHaveLength(numElements);
  });

  it("'to' prop is setup in Link component", () => {
    const index = 1;
    const link = findByTestAttr(component, "link-episode").at(index);
    expect(link.props().to).toBe(`details/${list[index].id}`);
  });
});

function setUp(props = {}) {
  return shallow(<EpisodesList {...props} />);
}
