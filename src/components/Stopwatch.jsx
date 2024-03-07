"use client";
import { useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [intervalTimer, setIntervalTimer] = useState(null);

  const start = () => {
    setIntervalTimer(
      setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000)
    );
  };

  const stop = () => {
    clearInterval(intervalTimer);
  };

  const clear = () => {
    setTime(0);
  };

  return (
    <div>
      <div id="timer">
        <span>{time}</span> seconds
      </div>
      <div id="buttons">
        <button id="start" onClick={start}>
          Start
        </button>
        <button id="stop" onClick={stop}>
          Stop
        </button>
        <button id="clear" onClick={clear}>
          Clear
        </button>
      </div>
    </div>
  );
};
export default Stopwatch;
