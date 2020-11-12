import React from "react";
import PropTypes from "prop-types";
import Img from "../Img";
import "./ShowDetails.scss";

export default function ShowDetails({ image, name, summary }) {
  return (
    <div className="ShowDetails">
      <div className="contImg">
        <Img data-test="image" src={image.medium} />
      </div>
      <div className="contDetails">
        <p data-test="name">{name}</p>
        <div
          data-test="summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      </div>
    </div>
  );
}

ShowDetails.propTypes = {
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  image: PropTypes.shape({
    medium: PropTypes.string,
    original: PropTypes.string,
  }),
};
