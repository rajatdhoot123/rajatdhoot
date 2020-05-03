import React, { useEffect, useRef, useState } from "react";
import SectionA from "./Components/SectionA";
import SectionB from "./Components/SectionB";
import SectionC from "./Components/SectionC";
import { VerticalNav, BackgroundGradient } from "./Components/CssComponents";

function App() {
  const hero = useRef(null);
  const info = useRef(null);
  const contact = useRef(null);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let elem = entry.target;

          if (entry.intersectionRatio >= 0.5) {
            window.location.hash = elem.id;
          }
        }
      });
    }, options);
    if (hero.current) {
      observer.observe(hero.current);
    }
    if (info.current) {
      observer.observe(info.current);
    }
    if (contact.current) {
      observer.observe(contact.current);
    }
  }, []);
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
      <SectionA ref={hero} />
      <SectionB ref={info} />
      <SectionC ref={contact} />
    </BackgroundGradient>
  );
}

export default App;
