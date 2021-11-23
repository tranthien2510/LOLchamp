import React, { useReducer } from "react";
import ListChamp from "../components/ListChamp";
import SearchBar from "../components/SearchBar";
import { initState, reducer } from "./../reducers/index";
import ChampionContext from "../common/ChampionContext";

function Section(props, ref) {
  
  const [state, dispatch] = useReducer(reducer, initState);

  const provider = { state, dispatch };

  const sectionRef = React.useRef();

  React.useImperativeHandle(ref, () => ({
    scrollToSection() {
      const offsetTop = sectionRef.current.offsetTop - 86; //86px from navbar
      console.log(offsetTop);
      window.scrollTo(0, offsetTop);
    },
  }));

  return (
    <div className="section" id="section" ref={sectionRef}>
      <div className="wrapper container">
        <ChampionContext.Provider value={provider}>
          <SearchBar />
          <ListChamp />
        </ChampionContext.Provider>
      </div>
    </div>
  );
}

export default React.forwardRef(Section);
