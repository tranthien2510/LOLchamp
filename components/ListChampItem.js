import InfoIcon from "@material-ui/icons/Info";
import React from "react";

function ListChampItem() {
  return (
    <div className="col c-3 m-4 sm-6 ss-12">
      <div className="list-item-champion">
        <img
          src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-champion-aatrox/en_US/ae9700f463a66363e1d0a462e65bc8e9aa685582/assets/img/share/share-1200x630.jpg"
          alt=""
        />
        <div className="image-champion-overlay"></div>
        <span className="info-champion">
          <InfoIcon style={{ fontSize: 30 }} />
        </span>
        <div className="label-champion">
          <span className="name-champion">Atrox</span>
          <span className="classify">Tanker</span>
        </div>
      </div>
    </div>
  );
}

export default ListChampItem;
