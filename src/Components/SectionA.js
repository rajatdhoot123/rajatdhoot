import React from "react";
import { SOCIAL_LINK } from "../Constants";
const SectionA = React.forwardRef((props, ref) => {
  const handleSocialMedia = (media) => {
    window.open(SOCIAL_LINK[media], "_blank");
  };
  return (
    <div ref={ref} id="hero" style={{ height: "100vh" }}>
      <div
        style={{
          textTransform: "uppercase",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          width: "100%",
        }}
      >
        <div style={{ marginLeft: "20%", position: "relative" }}>
          <h3 style={{ letterSpacing: "0.2rem" }}>
            <span style={{ color: "#ee596a" }}>Hello,</span> I am Rajat Dhoot
          </h3>
          <h1 style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
            Software Developer
          </h1>
          <h4 style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
            Design Website moslty powered by javascript
          </h4>
        </div>
        <div style={{ right: "0", position: "absolute", display: "flex" }}>
          <div
            onClick={handleSocialMedia.bind(null, "LINKEDIN")}
            style={{
              cursor: "pointer",
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
              paddingRight: "0px",
            }}
          >
            <img src="/rajatdhoot/linkedin.svg" />
          </div>
          <div
            style={{
              backgroundColor: "white",
              height: "50px",
              width: "auto",
              display: "flex",
              alignItems: "center",
              padding: "10px",
              paddingLeft: "0px",
            }}
          >
            <div
              onClick={handleSocialMedia.bind(null, "TWITTER")}
              style={{
                cursor: "pointer",
                height: "50px",
                width: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/rajatdhoot/twitter.svg" />
            </div>
            <div
              onClick={handleSocialMedia.bind(null, "FACEBOOK")}
              style={{
                cursor: "pointer",
                height: "50px",
                width: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/rajatdhoot/facebook.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SectionA;
