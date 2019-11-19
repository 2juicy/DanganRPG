import React from "react";
import "./App.css";
import characters from "./characters.json";
import Board from "./components/Board/Board";

function App() {
  console.log(characters);
  return (
    <div className="row">
      <Board />
    </div>
  );
}

export default App;
