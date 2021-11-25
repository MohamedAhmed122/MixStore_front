import React from "react";
import ReactLoading from "react-loading";
import "./style.css";

export default function Button({
  text,
  disabled,
  height,
  width,
  margin,
  loading,
  ...props
}) {
  return (
    <button
      text={text}
      className={disabled ? "disabled_button" : "main-button"}
      disabled={loading || disabled}
      style={{
        width,
        height,
        margin,
        opacity: loading ? 0.6 : 1,
      }}
      {...props}
    >
      {loading ? (
        <ReactLoading color={"gray"} height={20} width={20} type="spin" />
      ) : (
        text
      )}
    </button>
  );
}
