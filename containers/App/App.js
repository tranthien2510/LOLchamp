import React from "react";

import Overlay from "./../../components/Overlay/Overlay";
import Header from "./../Header/Header";
import Section from "../Section/Section";

function App() {
  return (
    <div className="app">
      <div className="content">
        <Header />
        <Section />
      </div>
      <Overlay />
    </div>
  );
}

export default App;
