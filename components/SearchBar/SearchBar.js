import React from "react";
import Button from './../Button/Button';
function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" name="" placeholder="Write something" id="txtSearch" />
      <Button>Search</Button>
    </div>
  );
}

export default SearchBar;
