import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="searchbox">
      <input
        type="Search"
        placeholder="Search robots"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
