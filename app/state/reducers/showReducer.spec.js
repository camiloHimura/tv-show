import {
  addShow,
  addEpisode,
  updateLoadingShow,
  updateLoadingEposide,
} from "../actions";
import showReducer from "./showReducer";

describe("show info", () => {
  it("deafult", () => {
    const newState = showReducer(undefined, {});
    expect(newState).toEqual({
      info: {},
      episode: {},
      loadingShow: false,
      loadingEpisode: false,
    });
  });

  it("adding show", () => {
    const info = { name: "test" };

    let newState = showReducer(undefined, addShow(info));
    expect(newState.info).toEqual(info);
  });

  it("loadingShow is a boolean, false", () => {
    let newState = showReducer(undefined, updateLoadingShow(0));
    expect(newState.loadingShow).toBe(false);
  });

  it("loadingShow is a boolean, true", () => {
    let newState = showReducer(undefined, updateLoadingShow("true"));
    expect(newState.loadingShow).toBe(true);
  });

  it("adding eposide", () => {
    const info = { name: "test" };

    let newState = showReducer(undefined, addEpisode(info));
    expect(newState.episode).toEqual(info);
  });

  it("updateLoadingEposide is a boolean, false", () => {
    let newState = showReducer(undefined, updateLoadingEposide(0));
    expect(newState.loadingEpisode).toBe(false);
  });

  it("updateLoadingEposide is a boolean, true", () => {
    let newState = showReducer(undefined, updateLoadingEposide("true"));
    expect(newState.loadingEpisode).toBe(true);
  });
});
