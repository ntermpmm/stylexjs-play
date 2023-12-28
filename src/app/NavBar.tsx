import React from "react";
import * as stylex from "@stylexjs/stylex";

const linear =
  "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,190,45,1) 100%)";

const styles = stylex.create({
  header: {
    padding: 8,
    backgroundColor: "white",
    position: stylex.firstThatWorks("sticky", "-webkit-sticky", "fixed"),
    color: stylex.firstThatWorks(linear, "blue"),
    top: "0px",
    boxShadow: "0 0 10px rgba(0,0,0,.1)",
  },
});

function NavBar() {
  return <nav {...stylex.props(styles.header)}>NavBar</nav>;
}

export default NavBar;
