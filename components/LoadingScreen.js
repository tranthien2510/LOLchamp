import React from "react";
import LoadingImage from "../public/assets/images/loading-icon-animated-gif-7.jpg";

function LoadingScreen({ myFlag }) {
  return (
    <div className="loading-screen">
      {myFlag ? <img src={LoadingImage} alt="" /> : <h2>No data found</h2>}
    </div>
  );
}

export default LoadingScreen;
