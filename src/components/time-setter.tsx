import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { formatTime } from "../lib";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setBreakTime, setSessionTime } from "../redux/slice/pomoSlice";

type TimeSetterType = {
  type: "session" | "break";
  time: number;
  min: number;
  max: number;
  interval: number;
};

export const TimeSetter: React.FC<TimeSetterType> = ({
  type,
  time,
  min,
  max,
  interval,
}) => {
  const dispatch = useAppDispatch();
  const isRunning = useAppSelector(
    (state) => state.promo.displayState.timeRunning
  );
  return (
    <div className="time-setter">
      <button
        id={`${type}-decrement`}
        disabled={isRunning}
        onClick={() => {
          type == "break"
            ? time > min
              ? dispatch(setBreakTime(time - interval))
              : null
            : time > min
            ? dispatch(setSessionTime(time - interval))
            : null;
        }}
      >
        <FaArrowDown />
      </button>
      <p id={`${type}-length`} style={{ fontSize: "1.25rem" }}>
        {formatTime(time)}
      </p>
      <button
        id={`${type}-increment`}
        disabled={isRunning}
        onClick={() => {
          type == "break"
            ? time < max
              ? dispatch(setBreakTime(time + interval))
              : null
            : time < max
            ? dispatch(setSessionTime(time + interval))
            : null;
        }}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};
