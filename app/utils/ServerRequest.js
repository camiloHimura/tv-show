import instance from "./axios.conf";
import catchError from "./CatchError";

export function searchShow(name) {
  return instance
    .get("/singlesearch/shows", { params: { q: name, embed: "episodes" } })
    .then(({ data }) => ({ ...data, episodes: data._embedded.episodes }))
    .catch(catchError);
}

export function searchEpisode(id) {
  return instance
    .get(`/episodes/${id}`)
    .then(({ data }) => data)
    .catch(catchError);
}
