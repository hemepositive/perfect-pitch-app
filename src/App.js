import React from "react";
import Main from "./MainOctaves";
// import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <section className="section ">
        <div className="container is-widescreen">
          <div className="notification is-info">
            <h1 className="title">Perfect Pitch</h1>
            <h2 className="subtitle">
              An app that will appeal to less than 1 in 10,000 people on Earth.
            </h2>
          </div>
        </div>
        {/* <Player notes={choices} note={note} reset={reset} /> */}
        <Main />
        {/* <Footer /> */}
      </section>
    </div>
  );
}
