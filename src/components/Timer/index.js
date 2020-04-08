import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import moment from "moment";
import "./style.css";

export default ({
  time,
  timerStep,
  autoStart,
  onTick,
  onTimeEnd,
  onTimeStart,
  onTimePause,
}) => {
  const [start, changeState] = useState(autoStart ? true : false);
  const [timeLeft, changeTimer] = useState(time);
  function startTimer() {
    changeState(!start);
    start ? onTimeStart() : onTimePause();
  }
  useEffect(() => {
    let intervalId = null;
    if (!timeLeft) {
      onTimeEnd();
      return;
    }
    if (start) {
      intervalId = setInterval(() => {
        changeTimer(timeLeft - timerStep / 1000);
      }, timerStep);
      onTick(timeLeft);
    }

    return () => clearInterval(intervalId);
  }, [timeLeft, timerStep, start, onTick, onTimeEnd]);
  return (
    <div className="timer-wrapper">
      <div className="timer-container">
        <div className="timer-count">
          {moment(timeLeft * 1000).format("mm:ss")}
        </div>
        <Button
          variant="contained"
          color="primary"
          className="start-button"
          onClick={startTimer}
        >
          {start ? "Stop" : "Start"}
        </Button>
      </div>
    </div>
  );
};
