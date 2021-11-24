import React from "react";
import "./style.css";

export default function Button({
  text,
  disabled,
  height,
  width,
  margin,
  ...props
}) {
  return (
    <button
      text={text}
      className={ + disabled ? "disabled_button" : "main-button"}
      style={{
        width,
        height,
        margin,
      }}
      {...props}
    >
      {text}
    </button>
  );
}
