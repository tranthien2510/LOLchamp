import InfoIcon from "@material-ui/icons/Info";
import React from "react";

import Assassin from "../public/assets/icons/Assassin_icon.png";
import Fighter from "../public/assets/icons/Fighter_icon.png";
import Mage from "../public/assets/icons/Mage_icon.png";
import Support from "../public/assets/icons/Support_icon.png";
import Marksman from "../public/assets/icons/Marksman_icon.png";
import Tank from "../public/assets/icons/Tank_icon.png";

function ListChampItem({ champion }) {
  
  const tagIcon = (tag) => {
    switch (tag) {
      case "Assassin":
        return Assassin;

      case "Fighter":
        return Fighter;

      case "Mage":
        return Mage;

      case "Support":
        return Support;

      case "Marksman":
        return Marksman;

      case "Tank":
        return Tank;

      default:
        break;
    }
  };

  return (
    <div className="col c-3 m-4 sm-6 ss-12">
      <div className="list-item-champion">
        <img src={champion.avatar} alt="" className="avatar" />
        <div className="image-champion-overlay"></div>
        <span className="info-champion">
          <InfoIcon style={{ fontSize: 30 }} />
        </span>
        <div className="label-champion">
          <span className="name-champion">{champion.name}</span>
          <span className="classify">
            {champion.tags.map((tag) => (
              <img src={tagIcon(tag)} className="tag-icon" />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ListChampItem;
