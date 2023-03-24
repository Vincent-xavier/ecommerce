import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    palette: {
      mode: "light",
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
    },
  },
  reducers: {
    switchMode: (state, action) => {
      state.palette.mode = action.payload;
      localStorage.setItem("mode", JSON.stringify(state.palette));
    },
    setPrimary: (state, action) => {
      state.palette.primary = action.payload;
      localStorage.setItem("mode", JSON.stringify(state.palette));
    },
    setSecondary: (state, action) => {
      state.palette.secondary = action.payload;
      localStorage.setItem("mode", JSON.stringify(state.palette));
    },
  },
});

export const { setPrimary, setSecondary, switchMode } = themeSlice.actions;
export default themeSlice.reducer;
