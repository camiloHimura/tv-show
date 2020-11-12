import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getShow } from "../../../state/actions";
import "./Home.scss";

import Loader from "../../generals/Loader";
import EpisodesList from "../../generals/EpisodesList";
import ShowDetails from "../../generals/ShowDetails";

const mapStateToProps = (state) => ({
  info: state.show.info,
  loadingInfo: state.show.loadingShow,
});

const mapDispachToProps = (dispatch) => ({
  getShow: (name) => dispatch(getShow(name)),
});

export function Home({ info, loadingInfo, getShow }) {
  const { name, summary, image, episodes } = info;

  React.useEffect(() => {
    getShow("The Powerpuff Girls");
  }, []);

  return (
    <div className="Home">
      <Loader data-test="loader" isVisible={loadingInfo} />
      {!loadingInfo && name && (
        <>
          <ShowDetails
            name={name}
            image={image}
            summary={summary}
            data-test="details"
          />
          <EpisodesList data-test="list" list={info.episodes} />
        </>
      )}
    </div>
  );
}

Home.propTypes = {
  getShow: PropTypes.func.isRequired,
  loadingInfo: PropTypes.bool.isRequired,
  info: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      image: PropTypes.shape({
        medium: PropTypes.string,
        original: PropTypes.string,
      }),
      episodes: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        number: PropTypes.number,
        season: PropTypes.number,
      }),
    }).isRequired,
  ]),
};

export default connect(mapStateToProps, mapDispachToProps)(Home);
