import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState("OFF")

  let color = "white"

  function toggler() {
    setToggle(toggler => (toggler === "OFF") ? (toggler = "ON") : toggler = "OFF")
  }

  if (toggle === "ON") {
    color = "red"
  }
  else {
    color = "white"
  }

  return <button onClick={toggler} style={{background: color}}>{toggle}</button>;
}

export default Toggle;
