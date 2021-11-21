import React from "react";
import { COLORS } from "../../styles/colors";
import "./style.css";

export default function Button({
  text,
  onClick,
  color = COLORS.primary,
  height,
  width,
  marginTop,
  margin,
  marginLeft,
  marginRight,
  marginBottom,
}) {
  return (
    <button
      onClick={onClick}
      text={text}
      className="main-button"
      style={{
        backgroundColor: color,
        width,
        height,
        marginTop,
        margin,
        marginLeft,
        marginRight,
        marginBottom,
      }}
    >
      {text}
    </button>
  );
}
