import React from "react";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "./tokens.stylex";
const styles = stylex.create({
  input: {
    padding: 8,
    borderRadius: spacing.borderRadius,
    // pseudo-element
    "::placeholder": {
      color: "#999",
    },
    color: {
      default: "#333",
      // pseudo-class
      ":invalid": "red",
    },
    border: {
      default: "1px solid #999",
      // pseudo-class
      ":invalid": "1px solid red",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
});

function Form() {
  return (
    <form {...stylex.props(styles.form)}>
      <input
        {...stylex.props(styles.input)}
        id="email"
        name="email"
        type="email"
        defaultValue="na@me@example.com"
      />
      <input
        type="text"
        {...stylex.props(styles.input)}
        placeholder="placeholder"
      />
    </form>
  );
}

export default Form;
