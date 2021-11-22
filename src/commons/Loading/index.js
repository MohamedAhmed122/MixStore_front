import React from "react";
import Loader from "react-loader-spinner";
import { COLORS } from "../../styles/colors";
import "./style.css";

export default function Loading({ color=COLORS.blue, visible }) {
  return (
    <div className="loader_compo">
      <Loader
        type="Circles"
        color={color}
        height={200}
        width={200}
        visible={visible}
      />
    </div>
  );
}
