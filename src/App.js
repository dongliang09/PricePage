import React from "react";

import Collapsible from "react-collapsible";
import { IoIosArrowDown } from "react-icons/io";

import faq from "./faq"; //json data
import info from "./info"; //json data
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <PricePlan />
      <FAQ />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <span>You got ideas</span>
      <br />
      <span>We implement it</span>
    </div>
  );
}

function PricePlan() {
  return (
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
  );
}

function FAQ() {
  return (
    <div className="faqSection">
      <h2>FAQ</h2>
      <div className="faqQs">
        {faq.map((value) => {
          return (
            <div>
              <Collapsible
                trigger={
                  <div className="faqSingleQ">
                    <h2>{value.question}</h2>
                    <div className="faqArrow">
                      <IoIosArrowDown />
                    </div>
                  </div>
                }
                className="collapsible"
              >
                <p>{value.answer}</p>
              </Collapsible>
              <div className="divider"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
