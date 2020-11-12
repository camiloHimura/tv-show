import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./EpisodesList.scss";

export default function EpisodesList({ list = [] }) {
  return (
    <div className="EpisodesList">
      {list.map((data) => (
        <div key={data.id}>
          <Link data-test="link-episode" to={`details/${data.id}`}>
            {data.season}: {data.number} - {data.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

EpisodesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.number,
      season: PropTypes.number,
    })
  ),
};
