import {
  ADD_SHOW,
  ADD_EPISODE,
  LOADING_SHOW,
  LOADING_EPISODE,
} from "../actions/actions-types";

const initState = {
  info: {},
  loadingShow: false,
  episode: {},
  loadingEpisode: false,
};
export default function showReducer(state = initState, action) {
  switch (action.type) {
    case ADD_SHOW:
      return { ...state, info: action.payload };

    case LOADING_SHOW:
      return { ...state, loadingShow: Boolean(action.payload) };

    case ADD_EPISODE:
      return { ...state, episode: action.payload };

    case LOADING_EPISODE:
      return { ...state, loadingEpisode: Boolean(action.payload) };
    default:
      return state;
  }
}
