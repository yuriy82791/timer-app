import React from "react";
import ReactDOM from "react-dom";
import Timer from "./components/Timer";

ReactDOM.render(
  <React.StrictMode>
    <Timer
      time={10}
      timerStep={1000}
      autoStart={false}
      onTick={(time) => console.log("Осталось времени: " + time)}
      onTimeEnd={() => console.log("Время вышло!")}
      onTimeStart={() => console.log("Таймер запущен!")}
      onTimePause={() => console.log("Таймер на паузе!")}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
