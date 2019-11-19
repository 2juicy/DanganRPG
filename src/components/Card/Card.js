import React from "react";
import "Card.css";

export default function Card({ style, id }) {
  return (
    <button className={`character ${style}`} id={`character${id}`} value={id}>
      Kaede Akamatsu<span class="yourhp">100</span>
    </button>
  );
}
