import React from "react";
import { COLORS } from "../../styles/colors";
import "./styles.css";

export default function Button({
  text,
  color = COLORS.primary,
  onClick,
  width,
  height,
}) {
  return (
    <button
      onClick={onClick}
      className="main_button"
      style={{ backgroundColor: color, width, height }}
    >
      {text}
    </button>
  );
}
