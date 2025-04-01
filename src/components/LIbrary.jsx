import React from "react";
const Library = ({ image, title, authors }) => {
  return (
    <div className="libraryArea">
      <img src={image} alt="movies.image" />
      <h2>{title}</h2>
      <h4>Authors</h4>
      <ol>
        {authors?.map((author) => (
          <li key={author.name}>{author.name}</li>
        ))}
      </ol>
    </div>
  );
};
export default Library;
