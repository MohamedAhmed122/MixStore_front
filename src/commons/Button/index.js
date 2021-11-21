import React from "react";
import { COLORS } from "../../styles/colors";
import "./style.css";

export default function Button({
  text,
  disabled,
  color = COLORS.primary,
  height,
  width,
  margin,
  ...props
}) {
  return (
    <button
      text={text}
      className={ disabled ? 'dis':  "main-button"}
      style={{
        backgroundColor:disabled ?  COLORS.gray :color,
        width,
        margin,
        height,
      }}
      {...props}
    >
      {text}
    </button>
  );
}
