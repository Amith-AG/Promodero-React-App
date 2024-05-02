import "./App.css";
import { DisplayTimeBox } from "./components/display-time-box";
import { TimeSetter } from "./components/time-setter";
import { useAppSelector } from "./redux/hooks";

function App() {
  const min = 60;
  const max = 60 * 60;
  const interval = 60;

  const sessionTime = useAppSelector((state) => state.promo.sessionTime);
  const breakTime = useAppSelector((state) => state.promo.breakTime);

  return (
    <div className="promo">
      <div className="promo-card">
        <h1 style={{ fontFamily: "monospace", fontSize: "3rem" }}>
          Promodoro App
        </h1>
        <div className="time-setter">
          <div className="flex-col border">
            <label
              id="break-label"
              style={{ fontSize: "1.25rem", fontWeight: "bold" }}
            >
              Break Length
            </label>
            <TimeSetter
              type="break"
              time={breakTime}
              min={min}
              max={max}
              interval={interval}
            />
          </div>

          <div className="flex-col border">
            <label
              id="session-label"
              style={{ fontSize: "1.25rem", fontWeight: "bold" }}
            >
              Session Length
            </label>
            <TimeSetter
              type="session"
              time={sessionTime}
              min={min}
              max={max}
              interval={interval}
            />
          </div>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DisplayTimeBox />
        </div>
      </div>
    </div>
  );
}

export default App;
