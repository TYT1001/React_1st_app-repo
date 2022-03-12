import React from "react";
import "tachyons";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <input
      className="pa2 ma4"
      type="search"
      placeholder="search snacks"
      onChange={searchChange}
    />
  );
};

export default SearchBox;
