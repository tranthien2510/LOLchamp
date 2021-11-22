import React from "react";

import Overlay from "../components/Overlay";
import Header from "./Header";
import Section from "./Section";

function App() {
  
  const sectionRef = React.useRef()

  const handleScrollToSection = ()=>{
    sectionRef.current.scrollToSection();
  }

  return (
    <div className="app">
      <div className="content">
        <Header handleScrollToSection={handleScrollToSection}/>
        <Section ref={sectionRef}/>
      </div>
      <Overlay />
    </div>
  );
}

export default App;
