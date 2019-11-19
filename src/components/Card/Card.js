import React from "react";
import "Card.css";

export default function Card({ style, id, name, HP }) {
  return (
    <button className={`character ${style}`} id={`character${id}`} value={id}>
      {name}
      <span class="yourhp">{HP}</span>
    </button>
  );
}
