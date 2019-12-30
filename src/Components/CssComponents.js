import styled from "styled-components";

export const VerticalNav = styled.div`
  top: 50%;
  z-index: 1;
  position: fixed;
  transform: translateY(-50%);
  margin-left: 20px;
  .circle.small {
    cursor: pointer;
    margin: 20px;
    border: 2px solid black;
    border-radius: 50%;
    width: 12px;
    height: 12px;
  }
  @media only screen and (max-width: 600px) {
    bottom: 0;
    top: initial;
    transform: translateY(-50%);
    margin-left: 0px;
    display: flex;
  }
`;

export const BackgroundGradient = styled.div`
  background-image: linear-gradient(
    109.6deg,
    rgba(204, 228, 247, 1) 11.2%,
    rgba(237, 246, 250, 1) 100.2%
  );

  @media only screen and (max-width: 600px) {
    .app-top {
      justify-content: center;
      display: flex;
    }
  }
`;
