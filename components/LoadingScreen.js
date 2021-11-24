import React from "react";
/* import LoadingImage from "../public/assets/images/loading-icon-animated-gif-7.jpg"; */
import LoadingImage from "../public/assets/images/Dual Ball-1.2s-231px.gif";

function LoadingScreen({ myFlag, onClick }) {
  return (
    <div className="loading-screen" onClick={onClick}>
      {myFlag ? <img src={LoadingImage} alt="" /> : <h2>No data found</h2>}
    </div>
  );
}

export default LoadingScreen;
