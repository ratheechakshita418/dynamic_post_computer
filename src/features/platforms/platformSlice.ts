import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlatformState } from "./platformTypes";

const initialState: PlatformState = {
  selectedPlatforms: [],
};

const platformSlice = createSlice({
  name: "platforms",
  initialState,
  reducers: {
    togglePlatform: (state, action: PayloadAction<string>) => {
      const platform = action.payload;

      if (state.selectedPlatforms.includes(platform)) {
        state.selectedPlatforms = state.selectedPlatforms.filter(
          (item) => item !== platform
        );
      } else {
        state.selectedPlatforms.push(platform);
      }
    },

    clearPlatforms: (state) => {
      state.selectedPlatforms = [];
    },
  },
});

export const { togglePlatform, clearPlatforms } =
  platformSlice.actions;

export default platformSlice.reducer;
