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
            onClick={() => (window.location.href = "#hero")}
            className="circle small"
          ></div>
          <div
            onClick={() => (window.location.href = "#info")}
            className="circle small"
          ></div>
          <div
            onClick={() => (window.location.href = "#contact")}
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
