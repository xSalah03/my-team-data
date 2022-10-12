import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { AllPlayerStateInterface, Player } from "../../interface/redux-state/AllPlayerStateInterface";
import dataPlayers  from "../../assets/json/players.json";

const initialState: AllPlayerStateInterface = {
  players:[] ,
  isLoading: false,
  isSuccessful: false,
  error: {},
};

export const allPlayerSlice = createSlice({
  name: "allPlayer",
  initialState,
  reducers: {
    getAllPlayerRequestAction: (state: any) => {
      state.isLoading = true;
    },
    getAllPlayerSuccessAction: (state: any, action: PayloadAction<any>) => {
      state.players = dataPlayers.value;

      state.isLoading = false;
      state.isSuccessful = true;
    },

    getAllPlayerFailedAction: (state: any, action: PayloadAction<{}>) => {
      state.isSuccessful = false;
      state.result = action.payload;
    },
    // deletePlayerAction({payload:22})
    deletePlayerAction: (state: any, action: PayloadAction<number>) => {
      state.players = state.players.filter((e:Player) => e.id != action.payload)
      state.isSuccessful = true;
    },
  },
});

export const {
  getAllPlayerRequestAction,
  getAllPlayerSuccessAction,
  getAllPlayerFailedAction,
  deletePlayerAction,
} = allPlayerSlice.actions;

export default allPlayerSlice.reducer;
