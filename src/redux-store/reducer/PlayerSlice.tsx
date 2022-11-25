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
  isValid: false,
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
      state.players.push(action.payload);
      state.isSuccessful = true;
    },
    status: (state: any, action: PayloadAction<boolean>) => {
      state.isValid = action.payload;
    },
    updatePlayerAction: (state: any, action: PayloadAction<Player>) => {
      let id = state.players.findIndex(
        (e: Player) => e.id == action.payload.id
      );
      if (id != -1) state.players[id] = action.payload;
      state.isValid = true;
      console.log(id, action.payload);
      state.isSuccessful = true;
    },
  },
});

export const {
  getAllPlayerRequestAction,
  getAllPlayerSuccessAction,
  getAllPlayerFailedAction,
  deletePlayerAction,
  addPlayerAction,
  updatePlayerAction,
  status,
} = PLayerSlice.actions;

export default PLayerSlice.reducer;
