import React from "react";

import ListChampItem from "../ListChampItem/ListChampItem";

function ListChamp() {
  const champs = [2,5,6,7,5];
  const renderListChampionItem = () => {
    let xhtml = null;
    xhtml = champs.map((ele) => {
      return <ListChampItem />;
    });
    return xhtml;
  };
  return <div className="list-champion row">{renderListChampionItem()}</div>;
}

export default ListChamp;
