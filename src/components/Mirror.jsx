"use client";

import { useState } from "react";

const Mirror = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
};
export default Mirror;
