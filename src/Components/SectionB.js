import React from "react";
import styled from "styled-components";
import { WhatIDOPointes } from "../Constants/String";

const WhatIDO = ({ image, heading, text }) => (
  <WhatIDOWrapper>
    <div className="image-with-text">
      <div
        style={{
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          src={image}
          style={{
            maxHeight: "75px",
            maxWidth: "75px",
            borderRadius: "50%"
          }}
          alt="Suouce"
        />
      </div>
      <div
        className="text-center"
        style={{ padding: "1rem", paddingLeft: "0px" }}
      >
        <h4 style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
          {heading}
        </h4>
        <span style={{ color: "#abb0c8" }}>{text}</span>
      </div>
    </div>
  </WhatIDOWrapper>
);

const SectionB = () => {
  return (
    <div id="info" style={{ display: "flex", height: "100vh" }}>
      <Card>
        <CardBody>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "4rem"
            }}
          >
            <div style={{ textTransform: "uppercase", textAlign: "center" }}>
              <h4 style={{ letterSpacing: "0.2rem" }}>What I do</h4>
              <h2 style={{ fontWeight: "800" }}>Specializing In</h2>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {WhatIDOPointes.map(({ text, heading, image }) => (
              <WhatIDO key={heading} image={image} heading={heading} text={text} />
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin: auto;
  max-height: 80%;
  overflow: scroll;
  width: 60%;
  background-color: white;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const CardBody = styled.div`
  width: 100%;
`;

const WhatIDOWrapper = styled.div`
  width: 50%;
  .image-with-text {
    display: flex;
    padding: 1rem;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    .image-with-text {
      display: block;
      text-align: center;
    }
  }
`;

export default SectionB;
