import React, { useReducer } from "react";
import ListChamp from "../components/ListChamp";
import SearchBar from "../components/SearchBar";

function Section(props, ref) {
  const sectionRef = React.useRef();

  React.useImperativeHandle(ref, () => ({
    scrollToSection() {
      const offsetTop = sectionRef.current.offsetTop - 86; //86px from navbar
      console.log(offsetTop)
      window.scrollTo(0, offsetTop);
    },
  }));

  

  return (
    <div className="section" id="section" ref={sectionRef}>
      <div className="wrapper container">
        <SearchBar />
        <ListChamp />
      </div>
    </div>
  );
}

export default React.forwardRef(Section);
