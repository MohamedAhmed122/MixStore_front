import React from "react";
import Loader from "react-loader-spinner";

export default function Loading({ visible }) {
  return (
    <Loader
      type="Circles"
      color="#00BFFF"
      height={300}
      width={300}
      visible={visible}
    />
  );
}
