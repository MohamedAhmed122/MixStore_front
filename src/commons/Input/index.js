import React from "react";
import "./style.css";

export default function Input({
  height,
  width,
  placeholder,
  onChange,
  type,
  value,
  Icon,
  backgroundColor: color,
  border,
  borderRadius,
  margin,
}) {
  return (
    <div
      className="input_container"
      style={{
        backgroundColor: color,
        height,
        width,
        border,
        borderRadius,
        margin,
      }}
    >
      {Icon && <Icon />}
      <input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        className="input"
      />
    </div>
  );
}
