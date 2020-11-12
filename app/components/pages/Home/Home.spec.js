import React from "react";
import { shallow } from "enzyme";
import { Home } from "./Home";
import { findByTestAttr } from "../../../utils/test";
const initialProps = {
  info: {},
  loadingInfo: true,
  getShow: () => {},
};

describe("Home", () => {
  describe("empty props", () => {
    const component = setUp();

    it("Loader is visible", () => {
      expect(findByTestAttr(component, "loader").props().isVisible).toBe(true);
    });

    it("Details isn't rendered", () => {
      expect(findByTestAttr(component, "details")).toHaveLength(0);
    });

    it("List isn't rendered", () => {
      expect(findByTestAttr(component, "list")).toHaveLength(0);
    });
  });

  describe("full props", () => {
    const dataTest = {
      loadingInfo: false,
      info: {
        name: "name test",
        summary: "summary test",
        image: {
          medium: "medium test",
          original: "original test",
        },
        episodes: [{ name: "name test" }],
      },
    };
    const component = setUp(dataTest);

    it("Loader isn't visible", () => {
      expect(findByTestAttr(component, "loader").props().isVisible).toBe(false);
    });

    it("Details is rendered", () => {
      const details = findByTestAttr(component, "details");
      expect(details).toHaveLength(1);
      expect(details.props()).toEqual({
        "data-test": "details",
        name: dataTest.info.name,
        image: dataTest.info.image,
        summary: dataTest.info.summary,
      });
    });

    it("List is rendered", () => {
      const list = findByTestAttr(component, "list");
      expect(list).toHaveLength(1);
      expect(list.props()).toEqual({
        "data-test": "list",
        list: dataTest.info.episodes,
      });
    });
  });
});

function setUp(props = {}) {
  return shallow(<Home {...initialProps} {...props} />);
}
