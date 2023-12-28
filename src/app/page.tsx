"use client";
import React, { useEffect, useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { Button } from "./Button";
import { spacing } from "./tokens.stylex";
import { dracula } from "./themes";
import Form from "./Form";
import NavBar from "./NavBar";

const MEDIA_MOBILE = "@media (min-width: 480px)";

const styles = stylex.create({
  container: {
    marginTop: 32,
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: 32,
    backgroundColor: "white",
    borderRadius: "1em",
    boxShadow: "0 0 10px rgba(0,0,0,.1)",
  },
  heading: {
    color: "red",
    [MEDIA_MOBILE]: {
      color: "blue",
    },
    textAlign: "center",
  },
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
  button: {
    padding: 8,
  },
  dynamic: (value) => ({
    fontSize: value,
  }),
});

function generateRandomNumber() {
  return Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
}

export default function Home() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [buttonState, setButtonState] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setRandomNumber(generateRandomNumber());
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main {...stylex.props(dracula, styles.container)}>
      <h1 {...stylex.props(styles.heading, styles.dynamic(randomNumber))}>
        Test StyleX
      </h1>
      <Button
        isDisabled={buttonState}
        isLarge
        onClick={() => setButtonState(!buttonState)}
        styles={styles.button}
        variant="primary"
      >
        Test Button
      </Button>
      <Form />
    </main>
  );
}
