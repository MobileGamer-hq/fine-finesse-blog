import React from "react";
import { colors, sizes } from "../constants";

export function Button({title, href, fill = true}) {
  return (
    <div
      className={fill ? "button" : "button-outline"}
      onClick={() => null}
      style={{
        backgroundColor: fill ? colors.primary : null,
        borderColor: fill ? null : colors.primary,
        borderWidth: fill ? null : "1rem",
        borderRadius: "0.4rem",
        fontSize: sizes.button.small.fontSize,
        padding: sizes.button.small.padding,
        color: fill ? "black" : colors.primary,
      }}
    >
      {title}
    </div>
  );
}
