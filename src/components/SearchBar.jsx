import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ value, onChange, onSubmit, ...props }) => {
  return (
    <form className="search-form" autoComplete="off" onSubmit={onSubmit}>
      <input
        type="search"
        name="search"
        value={value}
        placeholder="Search for books"
        onChange={onChange}
      />
      <button type="submit">
        <FaSearch size={24} />
      </button>
    </form>
  );
};

export default SearchBar;
