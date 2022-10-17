import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
  Player,
  PlayerStateInterface,
} from "../../interface/redux-state/PlayerStateInterface";
import dataPlayers from "../../assets/json/players.json";

const initialState: PlayerStateInterface = {
  players: [],
  isLoading: false,
  isSuccessful: false,
  error: {},
};

export const PLayerSlice = createSlice({
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
    deletePlayerAction: (state: any, action: PayloadAction<{}>) => {
      state.players = state.players.filter(
        (e: Player) => e.id != action.payload
      );
      state.isSuccessful = true;
    },
    addPlayerAction: (state: any, action: PayloadAction<{}>) => {
      state.players = state.players.push(action.payload)
      state.isSuccessful = true;
    },
  },
});

export const {
  getAllPlayerRequestAction,
  getAllPlayerSuccessAction,
  getAllPlayerFailedAction,
  deletePlayerAction,
} = PLayerSlice.actions;

export default PLayerSlice.reducer;
