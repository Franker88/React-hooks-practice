import React from "react";
import "./Search.css";

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className="Search-container">
      <label>Buscar Personaje:</label>
      <input
        type="text"
        value={search}
        ref={searchInput}
        onChange={(event) => handleSearch(event)}
      />
    </div>
  );
};

export { Search };
