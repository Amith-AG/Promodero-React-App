import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type pomoState = {
  sessionTime: number;
  breakTime: number;
  displayState: {
    displayType: "Session" | "Break";
    time: number;
    timeRunning: boolean;
  };
};

const initialState: pomoState = {
  sessionTime: 25 * 60,
  breakTime: 5 * 60,
  displayState: {
    displayType: "Session",
    time: 25 * 60,
    timeRunning: false,
  },
};

export const pomoSlice = createSlice({
  name: "Pomodoro",
  initialState,
  reducers: {
    setDisplayTime: (state, action: PayloadAction<number>) => {
      state.displayState.time = action.payload;
    },
    setSessionTime: (state, action: PayloadAction<number>) => {
      state.sessionTime = action.payload;
      state.displayState.time = action.payload;
    },
    setBreakTime: (state, action: PayloadAction<number>) => {
      state.breakTime = action.payload;
    },
    reset: (state) => {
      Object.assign(state, initialState);
    },
    decrementTime: (state) => {
      state.displayState = {
        ...state.displayState,
        time: state.displayState.time - 1,
      };
    },
    onStopPlay: (state) => {
      state.displayState = {
        ...state.displayState,
        timeRunning: !state.displayState.timeRunning,
      };
    },
    onTimeout: (state) => {
      if (state.displayState.displayType == "Session") {
        state.displayState = {
          ...state.displayState,
          displayType: "Break",
          time: state.breakTime,
        };
      } else {
        state.displayState = {
          ...state.displayState,
          displayType: "Session",
          time: state.sessionTime,
        };
      }
    },
  },
});

export const {
  setDisplayTime,
  setBreakTime,
  setSessionTime,
  reset,
  decrementTime,
  onStopPlay,
  onTimeout,
} = pomoSlice.actions;
export default pomoSlice.reducer;
