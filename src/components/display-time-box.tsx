import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  decrementTime,
  onStopPlay,
  onTimeout,
  reset,
} from "../redux/slice/pomoSlice";
import { formatTime } from "../lib";
import SucessAudio from "../assets/sucess_trumph.mp3";
import { FaPause, FaPlay, FaUndo } from "react-icons/fa";

export const DisplayTimeBox = () => {
  const time = useAppSelector((state) => state.promo.displayState.time);
  const isRunning = useAppSelector(
    (state) => state.promo.displayState.timeRunning
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!isRunning) return;
    const timeId = setInterval(() => {
      dispatch(decrementTime());
    }, 1000);
    return () => clearInterval(timeId);
  }, [isRunning, dispatch]);

  useEffect(() => {
    if (time == 0) {
      const audio = document.getElementById("sucess") as HTMLAudioElement;
      audio.play().catch(console.error);
      dispatch(onTimeout());
    }
  }, [time, dispatch]);
  return (
    <div id="time-left" className="flex-col ">
      <h2 id="timer-label">Session</h2>
      <p style={{ fontSize: "1.75rem" }}>{formatTime(time)}</p>
      <div className="flex">
        <button onClick={() => dispatch(onStopPlay())}>
          {isRunning ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={() => dispatch(reset())}>
          <FaUndo />
        </button>
      </div>

      <audio id="sucess" src={SucessAudio} />
    </div>
  );
};
