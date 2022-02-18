import "./styles.css";

import React from "react";

export default function App() {
  const info = [
    {
      id: 1,
      type: "Free",
      ColorStyle: "freeStyle",
      monthly: 0,
      yearl: 0,
      detail: "Lorem ipsum dolor",
      option: "Create Account"
    },
    {
      id: 2,
      type: "Pro",
      ColorStyle: "proStyle",
      monthly: 12,
      yearl: 10,
      detail: "Lorem ipsum dolor",
      option: "Sign up"
    },
    {
      id: 3,
      type: "Premium",
      ColorStyle: "premiumStyle",
      monthly: 23,
      yearl: 19,
      detail: "Lorem ipsum dolor",
      option: "Sign up"
    }
  ];

  return (
    <div className="App">
      <div className="header">
        <span>You got ideas</span>
        <br />
        <span>We implement it</span>
      </div>
      <div className="plan">
        <div className="choosePlan">
          <h2>Choose your plan</h2>
          <div>
            <input type="radio" id="yearly" value="yearly billing" />
            <label for="yearly">yearly billing</label>
          </div>
          <div>
            <input type="radio" id="monthly" value="monthly billing" />
            <label for="monthly">monthly billing</label>
          </div>
        </div>
        {info.map((value) => {
          return (
            <div className={value.ColorStyle}>
              <h1 className="priceType">{value.type}</h1>
              <p>{value.detail}</p>
              <div className="divider"></div>
              <h2 className="price">US${value.monthly}</h2>
              <div className="option">
                <a>{value.option}</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
