import React from "react";

import ListChamp from "./../../components/ListChamp/ListChamp";
import SearchBar from "./../../components/SearchBar/SearchBar";

function Section() {
  return (
    <div className="section">
      <div className="wrapper container">
        <SearchBar />
        <ListChamp />
      </div>
    </div>
  );
}

export default Section;
