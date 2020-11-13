import React from "react";
import { shallow } from "enzyme";
import { Details } from "./Details";
import { findByTestAttr } from "../../../utils/test";

jest.mock("react-router-dom", () => ({
  useParams: () => ({ id: 123 }),
  Link: (props) => <div {...props}>{props.children}</div>,
}));

const data = {
  getEpisode: () => {},
  loadingEpisode: true,
  episode: {
    name: "test name",
    season: 1,
    number: 2,
    summary: "test summary",
    image: { medium: "test medium", original: "test original" },
  },
};
describe("Details", () => {
  describe("loading Episode", () => {
    let component = setUp(data);

    it("Loader is visible", () => {
      expect(findByTestAttr(component, "loader").props().isVisible).toBe(true);
    });

    it("show link to 'go back'", () => {
      const component = setUp(data);
      const link = findByTestAttr(component, "link-home");
      expect(link.props().to).toBe("/");
    });

    it("Details isn't rendered", () => {
      expect(findByTestAttr(component, "details")).toHaveLength(0);
    });
  });

  describe("Episode loaded", () => {
    let component = setUp({ ...data, loadingEpisode: false });

    it("Loader is visible", () => {
      expect(findByTestAttr(component, "loader").props().isVisible).toBe(false);
    });

    it("show link to 'go back'", () => {
      const component = setUp(data);
      const link = findByTestAttr(component, "link-home");
      expect(link.props().to).toBe("/");
    });

    it("Details isn't rendered", () => {
      expect(findByTestAttr(component, "details")).toHaveLength(1);
    });
  });
});

function setUp(props = {}) {
  return shallow(<Details {...props} />);
}
