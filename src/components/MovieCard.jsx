import React from "react";

const MovieCard = ({ image, title, author }) => {
  return (
    <div className="card">
      <img src={image} alt="cover_img" />
      <h2>{title}</h2>
      <h3>By: {author}</h3>
    </div>
  );
};

export default MovieCard;
