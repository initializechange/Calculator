import React, { useState } from "react";
import "./styles.css";

export default function ResultComponent(props) {
  return (
    <div>
      <h1>{props.result}</h1>
    </div>
  );
}
