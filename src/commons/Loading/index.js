import React from "react";
import ReactLoading from "react-loading";

import { COLORS } from "../../styles/colors";
import "./style.css";

export default function Loading({ color = COLORS.gold, visible }) {
  if (visible) {
    return (
      <div className="LoadingPage" >
        <div className="loader_compo">
          <ReactLoading type="spokes" color={color} height={200} width={200} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
