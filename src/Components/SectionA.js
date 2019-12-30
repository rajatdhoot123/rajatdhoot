import React from "react";
import { ReactComponent as LinkedIn } from "../Images/linkedin.svg";
import { ReactComponent as Twitter } from "../Images/twitter.svg";
import { ReactComponent as Facebook } from "../Images/facebook.svg";
const SectionA = () => {
  return (
    <div id="sectionA" style={{ height: "100vh" }}>
      <div
        style={{
          textTransform: "uppercase",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          width: "100%"
        }}
      >
        <div style={{ marginLeft: "20%", position: "relative" }}>
          <h3 style={{ letterSpacing: "0.2rem" }}>
            <span style={{ color: "#ee596a" }}>Hello,</span> I am Rajat Dhoot
          </h3>
          <h1>Software Developer</h1>
          <h6>Design Website moslty powered by javascript</h6>
        </div>
        <div style={{ right: "0", position: "absolute", display: "flex" }}>
          <div
            style={{
              marginLeft: "10px",
              backgroundColor: "white",
              borderTopLeftRadius: "50%",
              borderBottomLeftRadius: "50%",
              height: "50px",
              width: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              paddingRight: "0px"
            }}
          >
            <LinkedIn />
          </div>
          <div
            style={{
              backgroundColor: "white",
              height: "50px",
              width: "auto",
              display: "flex",
              alignItems: "center",
              padding: "10px",
              paddingLeft: "0px"
            }}
          >
            <div
              style={{
                height: "50px",
                width: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Twitter />
            </div>
            <div
              style={{
                height: "50px",
                width: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Facebook />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Circle = {
  height: "50px",
  width: "50px",
  backgroundColor: "#bbb",
  borderRadius: "50%",
  display: "inline-block"
};

export default SectionA;
