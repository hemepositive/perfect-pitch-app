import React, { useState } from "react";
import Result from "./Result";
import * as Tone from "tone";
import Chance from "chance";
import { generateNotes } from "./utils";

const chance = new Chance();
// let notesList = chance.pickset(allNotes, 4);
let notesList = generateNotes(440, 25);
let noteSingle = chance.pickone(notesList);

const Main = () => {
  const [note, setNote] = useState(noteSingle);
  const [answers, setAnswers] = useState(notesList);
  const [result, setResult] = useState(null);

  const play = () => {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    console.log("playing", note.frequency, note.name);
    synth.triggerAttackRelease(note.frequency, 2, now);
  };

  const reset = () => {
    const chance = new Chance();
    // let notesList = generateNotes(440, 25);
    let noteSingle = chance.pickone(notesList);
    setAnswers(notesList);
    setNote(noteSingle);
    setResult(null);
  };

  const checkAnswer = (e) => {
    const check = e.target.value === note.name;
    if (check === true) {
      setResult("Correct! resetting...");
      setTimeout(() => {
        setResult(null);
        reset();
      }, 500);
    } else {
      setResult("Incorrect");
      setTimeout(() => {
        setResult(null);
      }, 500);
    }
  };

  return (
    <div className="main">
      {/* {answers.map((entry, i) => (
        <p key={i}>
          {entry.frequency}:{entry.name}
        </p>
      ))} */}
      <div className="field is-grouped">
        <div className="buttons ">
          <button
            className="button is-large is-success is-rounded"
            onClick={play}
          >
            play
          </button>
          <button
            className="button is-large is-warning is-rounded"
            onClick={reset}
          >
            reset
          </button>
        </div>
      </div>
      <div className="field is-grouped">
        <div className="buttons is-centered">
          {answers.map((entry, i) => {
            return (
              <button
                className="button is-link is-outlined"
                key={i}
                value={entry.name}
                onClick={checkAnswer}
              >
                {entry.name}
              </button>
            );
          })}
        </div>
      </div>
      <Result result={result} />
    </div>
  );
};

export default Main;
