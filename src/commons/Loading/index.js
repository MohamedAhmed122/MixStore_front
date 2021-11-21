import React from "react";
import Loader from "react-loader-spinner";
import "./style.css";

export default function Loading({ visible }) {
  return (
    <div className="loader_compo">
      <Loader
        type="Circles"
        color="#000"
        height={300}
        width={300}
        visible={visible}
      />
    </div>
  );
}
