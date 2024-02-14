// App.tsx
import React, { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure??",
  "But im so nice :(",
  "Why dont you want me!",
  "Please pookie",
  "Im going to cry..",
  "You know how much this hurts me",
  "Fine. i dont care",
  "I do care!!!",
  "Please...",
  "Im going to find out where you live...",
  "... and make you mine",
  "I cant live without you",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    const index = Math.min(noCount, phrases.length - 1);
    return phrases[index % phrases.length]; // Use modulo operator to loop back
  }

  function handleYesClick() {
    setYesPressed(true);
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/qeJtDi4BOkwAAAAi/tkthao219-bubududu.gif"
          />
          <div className="yay-text">
            WHAT OMG YAYY NO WAY!!! HOW DO I HAVE A GIRLFRIEND
          </div>
        </>
      ) : (
        <>
          <img
            alt="bears with hearts"
            src="https://media1.tenor.com/m/fMDB0tWSj_YAAAAC/milk-and-mocha-bear.gif"
          />
          <div>Will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
