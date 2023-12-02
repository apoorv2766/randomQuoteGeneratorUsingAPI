import React, { useState } from "react";
import "../RandomQuote/RandomQuote.css";
import { TfiReload } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";

const RandomQuote = () => {
  let quotes = [];
  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
    // console.log(quotes);
  }
   const [quote, setquote] = useState({
    text: "Life Is Very Difficult Without ...",
    author: "Apoorv Gupta",
  });
  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(select);
    setquote(select);
  };
  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${
        quote.author.split(",")[0]
      }`
    );
  };
  loadQuotes();
  return (
    <div className="fluid_">
      <div className="container">
        <div className="quote">{quote.text}</div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">-{quote.author.split(",")[0]}</div>
          <div className="icons">
            <TfiReload
              className="reload"
              onClick={() => {
                random();
              }}
            />
            <FaXTwitter
              className="twitter"
              onClick={() => {
                twitter();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
