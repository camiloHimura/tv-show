import React from "react";
import { shallow } from "enzyme";
import ShowDetails from "./ShowDetails";
import { findByTestAttr } from "../../../utils/test";

const data = {
  name: "name test",
  image: {
    medium: "image test",
  },
  summary: "summary test",
};

describe("ShowDetails", () => {
  let component;

  beforeEach(() => {
    component = setUp(data);
  });

  it("Img comopnent render 'medium' image", () => {
    const Img = findByTestAttr(component, "image");
    expect(Img.at(0).props().src).toBe(data.image.medium);
  });

  it("render 'name'", () => {
    expect(findByTestAttr(component, "name").text()).toBe(data.name);
  });

  it("render 'summary' with dangerouslySetInnerHTML", () => {
    expect(
      findByTestAttr(component, "summary").props().dangerouslySetInnerHTML
    ).toEqual({ __html: data.summary });
  });
});

function setUp(props = {}) {
  return shallow(<ShowDetails {...props} />);
}
