import React, { useEffect, useState } from "react";
import * as Tone from "tone";
// import Chance from "chance";

// alt= https://github.com/Tonejs/Tone.js/wiki/Using-Tone.js-with-React-or-Vue

// const letters = ["A", "B", "C", "D", "E", "F", "G"];
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// const numbers = [2, 3, 4, 5, 6, 7, 8];
// var chance = new Chance();
// let c = chance.pickone(letters);
// let n = chance.pickone(numbers);
// let createdNote = `${c + n}`;

// const buildApp = () => {
//   let i;
//   for (i = 0; i < 4; i++) {
//     let c = chance.pickone(letters);
//     let n = chance.pickone(numbers);
//     let createdNote = `${c + n}`;
//     setNotes([...notes, note]);
//   }
// };

const Player = ({ notes, note, reset }) => {
  // const [note, setNote] = useState(null);
  const [notesList, setNotesList] = useState(notes);
  const [duration, setDuration] = useState(2);
  // const [answer, setAnswer] = useState(null);
  const [heard, setHeard] = useState(false);
  const [correct, setCorrect] = useState(null);
  const [answered, setAnswered] = useState(false);

  const play = () => {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    console.log("note", note);
    synth.triggerAttackRelease(note, duration, now);
    setTimeout(() => {
      setHeard(true);
    }, duration + 1000);
  };

  const checkAnswer = (event) => {
    setAnswered(true);
    if (event.target.value === note) {
      setCorrect(true);
    }

    setTimeout(() => {
      setAnswered(false);
      setCorrect(false);
      reset();
    }, 1000);
  };

  // useEffect(() => {
  //   let chance = new Chance();
  //   const setNotesList(chance.shuffle(notes));
  // }, [notesList]);

  return (
    <section>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Title</h1>
          <h2 className="subtitle">Subtitle</h2>
          {/* buttons */}
          <div>
            <div className="buttons">
              <button className="button is-success" onClick={play}>
                play
              </button>
              <button className="button is-danger" onClick={reset}>
                reset
              </button>
            </div>
            <div className="buttons ">
              {heard &&
                notesList.map((c, i) => {
                  return (
                    <button
                      className="button"
                      key={i}
                      value={c}
                      onClick={checkAnswer}
                    >
                      {c}
                    </button>
                  );
                })}
            </div>
          </div>
          <div>
            {correct && <h3>correct</h3>}
            {!correct && answered ? <h3>wrong. it is {note}</h3> : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Player;
