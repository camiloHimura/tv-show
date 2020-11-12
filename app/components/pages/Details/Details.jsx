import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getEpisode } from "../../../state/actions";
import "./Details.scss";

import Loader from "../../generals/Loader";

const mapStateToProps = (state) => ({
  episode: state.show.episode,
  loadingEpisode: state.show.loadingEpisode,
});

const mapDispachToProps = (dispatch) => ({
  getEpisode: (id) => dispatch(getEpisode(id)),
});

export function Details({ getEpisode, episode, loadingEpisode }) {
  let { id } = useParams();
  const { name, season, number, summary } = episode;

  React.useEffect(() => {
    getEpisode(id);
  }, [id]);

  return (
    <div className="Details">
      <Link data-test="link-home" to="/">
        Back
      </Link>
      <Loader isVisible={loadingEpisode} />
      <p data-test="name">{name}</p>
      <p data-test="season">{season}</p>
      <p data-test="number">{number}</p>
      <div data-test="summary" dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
}

Details.propTypes = {
  getEpisode: PropTypes.func.isRequired,
  loadingEpisode: PropTypes.bool.isRequired,
  episode: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      season: PropTypes.number.isRequired,
      number: PropTypes.number.isRequired,
      summary: PropTypes.string.isRequired,
      image: PropTypes.shape({
        medium: PropTypes.string,
        original: PropTypes.string,
      }),
    }).isRequired,
  ]),
};

export default connect(mapStateToProps, mapDispachToProps)(Details);
