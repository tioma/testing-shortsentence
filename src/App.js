import React from "react";
import "./styles.css";

import ShortSentence from "./ShortSentence";

export default function App() {
  return (
    <div className="App">
      <ShortSentence length={10} />
    </div>
  );
}
