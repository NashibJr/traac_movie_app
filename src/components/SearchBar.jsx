import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSubmit, ...props }) => {
  return (
    <form className="search-form" autoComplete="off" onSubmit={onSubmit}>
      <input type="search" name="search" placeholder="Search for books" />
      <button type="submit">
        <FaSearch size={24} />
      </button>
    </form>
  );
};

export default SearchBar;
