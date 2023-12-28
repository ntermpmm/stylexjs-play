"use client";

import * as stylex from "@stylexjs/stylex";
import { ComponentProps } from "react";
import { colors, spacing } from "./tokens.stylex";

const DARK = "@media (prefers-color-scheme: dark)";

type ButtonProps = {
  isDisabled?: boolean;
  isLarge?: boolean;
  onClick?: () => void;
  styles?: stylex.StyleXStyles<{ padding: 0 | 8 | 12 }>;
  variant: "primary" | "danger";
} & ComponentProps<"button">;

const fadeIn = stylex.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const buttonStyle = stylex.create({
  base: {
    animationName: fadeIn,
    animationDuration: "1s",
    border: "none",
    backgroundColor: "none",
    padding: ".5em 1em",
    borderRadius: spacing.borderRadius,
    cursor: "pointer",
    "transition-duration": "300ms",
  },
  primary: {
    color: "white",
    backgroundColor: {
      default: colors.primaryColors,
      ":hover": colors.primaryDarkColors,
    },
    transform: {
      /* This will only apply on devices that support hover */
      ":hover": {
        default: null,
        "@media (hover: hover)": "scale(1.1)",
      },
      ":active": "scale(0.9)",
    },
  },
  danger: {
    color: "white",
    backgroundColor: "red",
  },
  disabled: {
    color: "white",
    backgroundColor: "gray",
    cursor: "not-allowed",
  },
  isLarge: {
    fontSize: "2rem",
  },
});

export function Button({
  isDisabled = false,
  isLarge = false,
  onClick,
  styles,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      {...stylex.props(
        buttonStyle.base,
        buttonStyle[variant],
        isDisabled && buttonStyle.disabled,
        isLarge && buttonStyle.isLarge
      )}
      {...props}
    />
  );
}
