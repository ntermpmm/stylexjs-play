"use client";

import * as stylex from "@stylexjs/stylex";
import { ComponentProps } from "react";

const DARK = "@media (prefers-color-scheme: dark)";

type ButtonProps = {
  variant: "primary" | "danger";
  isLarge?: boolean;
  styles?: stylex.StyleXStyles<{ padding: 0 | 8 | 12 }>;
} & ComponentProps<"button">;

const BUTTON_STYLES = stylex.create({
  base: {
    border: "none",
    backgroundColor: "none",
    padding: ".5em 1em",
    borderRadius: ".25em",
    cursor: "pointer",
    "transition-duration": "300ms",
  },
  primary: {
    color: "white",
    backgroundColor: {
      default: "blue",
      ":hover": "green",
      [DARK]: {
        default: "green",
        ":hover": "blue",
      },
    },
  },
  danger: {
    color: "white",
    backgroundColor: "red",
  },
  isLarge: {
    fontSize: "2rem",
  },
});

export function Button({
  variant = "primary",
  isLarge = false,
  styles,
  ...props
}: ButtonProps) {
  return (
    <button
      {...stylex.props(
        BUTTON_STYLES.base,
        BUTTON_STYLES[variant],
        isLarge && BUTTON_STYLES.isLarge
      )}
      {...props}
    />
  );
}
