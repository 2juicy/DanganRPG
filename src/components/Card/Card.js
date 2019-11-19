import React from "react";
import "Card.css";

export default function Card({ style, id, HP }) {
  return (
    <button className={`character ${style}`} id={`character${id}`} value={id}>
      Kaede Akamatsu<span class="yourhp">{HP}</span>
    </button>
  );
}
