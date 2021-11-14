import React from "react";
import "./style.css";

export default function Input({
  placeholder,
  type,
  onChange,
  value,
  width,
  height,
  Icon,
}) {
  return (
    <div className="input_container" style={{ width, height }}>
      {Icon && <Icon />}
      <input
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
        className="input"
      />
    </div>
  );
}
