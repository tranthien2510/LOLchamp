import React from "react";

import Overlay from "../components/Overlay";
import Header from "./Header";
import Section from "./Section";

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
