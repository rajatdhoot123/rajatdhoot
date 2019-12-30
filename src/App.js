import React from "react";
import SectionA from "./Components/SectionA";
import SectionB from "./Components/SectionB";
import SectionC from "./Components/SectionC";
import { VerticalNav, BackgroundGradient } from "./Components/CssComponents";

function App() {
  return (
    <BackgroundGradient>
      <div className="app-top">
        <VerticalNav>
          <div
            onClick={() => (window.location.href = "#sectionA")}
            className="circle small"
          ></div>
          <div
            onClick={() => (window.location.href = "#sectionB")}
            className="circle small"
          ></div>
          <div
            onClick={() => (window.location.href = "#sectionC")}
            className="circle small"
          ></div>
        </VerticalNav>
      </div>
      <SectionA />
      <SectionB />
      <SectionC />
    </BackgroundGradient>
  );
}

export default App;
