import {
  ADD_SHOW,
  ADD_EPISODE,
  LOADING_EPISODE,
  LOADING_SHOW,
} from "./actions-types";
import { searchShow, searchEpisode } from "../../utils/ServerRequest";

export function addShow(payload) {
  return { type: ADD_SHOW, payload };
}

export function addEpisode(payload) {
  return { type: ADD_EPISODE, payload };
}

export function updateLoadingShow(payload) {
  return { type: LOADING_SHOW, payload };
}

export function updateLoadingEposide(payload) {
  return { type: LOADING_EPISODE, payload };
}

export function getShow(name) {
  return async function (dispatch) {
    try {
      dispatch(updateLoadingShow(true));
      let show = await searchShow(name);
      dispatch(addShow(show));
    } catch (error) {
      dispatch(addErrorAction({ ...error }));
    } finally {
      dispatch(updateLoadingShow(false));
    }
  };
}

export function getEpisode(id) {
  return async function (dispatch) {
    try {
      dispatch(updateLoadingEposide(true));
      let episode = await searchEpisode(id);
      dispatch(addEpisode(episode));
    } catch (error) {
      dispatch(addErrorAction({ ...error }));
    } finally {
      dispatch(updateLoadingEposide(false));
    }
  };
}
