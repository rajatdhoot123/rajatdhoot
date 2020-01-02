import React, { useState } from "react";
import styled from "styled-components";
import { PaddingY } from "../Components/CssComponents";
import { postData } from "../api";
const SectionC = () => {
  const [state, setState] = useState({ name: "", email: "", message: "" });

  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    postData("https://formspree.io/mwkvyqzd", new FormData(form))
      .then(res => console.warn({ res: res.json() }))
      .catch(err => console.warn({ err }));
  };
  return (
    <div
      id="sectionC"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div>
        <h2>Contact</h2>
        <h4>Have a question or want to work together?</h4>
        <div>
          <form
            method="POST"
            action="https://formspree.io/mwkvyqzd"
            onSubmit={handleSubmit}
          >
            <PaddingY unit="0.5rem">
              <label>
                Name:
                <Input
                  name="name"
                  type="text"
                  value={state.name}
                  onChange={handleInput}
                />
              </label>
            </PaddingY>
            <PaddingY unit="0.5rem">
              <label>
                Email:
                <Input
                  name="email"
                  type="email"
                  value={state.email}
                  onChange={handleInput}
                />
              </label>
            </PaddingY>
            <PaddingY unit="0.5rem">
              <label>
                Your Message:
                <TextArea
                  name="message"
                  rows="4"
                  type="text"
                  value={state.message}
                  onChange={handleInput}
                />
              </label>
            </PaddingY>
            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
};

const Input = styled.input`
  height: 2.4rem;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  color: rgb(28, 28, 28);
  padding: 1.25rem 1.15rem;
  background: rgb(255, 255, 255);
  border-width: 0.15rem;
  border-style: solid;
  border-image: initial;
  outline: none;
  border-radius: 0.2rem;
`;

const TextArea = styled.textarea`
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  color: rgb(28, 28, 28);
  padding: 1.25rem 1.15rem;
  background: rgb(255, 255, 255);
  border-width: 0.15rem;
  border-style: solid;
  border-image: initial;
  outline: none;
  border-radius: 0.2rem;
`;

const SubmitButton = styled.button`
  cursor: pointer;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  min-width: 15rem;
  min-height: 44px;
  line-height: 44px;
  margin-top: 0px;
  margin-left: 0px;
  white-space: nowrap;
  font-size: 1.6rem;
  font-weight: 300;
  color: rgb(255, 255, 255);
  opacity: 1;
  background: border-box rgb(237, 90, 107);
  border-color: rgb(237, 90, 107);
  border-width: 0px;
  border-style: solid;
  border-radius: 0.2rem;
  padding: 0px 1.6rem;
  transition: transform 0.25s ease 0s, opacity 0.25s ease 0s,
    box-shadow 0.25s ease 0s;
  outline: none !important;
`;

export default SectionC;
