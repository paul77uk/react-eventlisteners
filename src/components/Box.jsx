"use client";

import { useState } from "react";

const Box = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      id="box"
      className={toggle ? "blue" : null}
      onClick={() => setToggle(!toggle)}
    ></div>
  );
};
export default Box;
