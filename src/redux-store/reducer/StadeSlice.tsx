import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import dataStades from "../../assets/json/stades.json";
import {
  Stade,
  StadeStateInterface,
} from "../../interface/redux-state/StadeStateInterface";

const initialState: StadeStateInterface = {
  stades: [],
  isLoading: false,
  isSuccessful: false,
  isValid: false,
  error: {},
};

export const StadeSlice = createSlice({
  name: "allStade",
  initialState,
  reducers: {
    getAllStadeRequestAction: (state: any) => {
      state.isLoading = true;
    },
    getAllStadeSuccessAction: (state: any, action: PayloadAction<any>) => {
      state.stades = dataStades.value;
      state.isLoading = false;
      state.isSuccessful = true;
    },

    getAllStadeFailedAction: (state: any, action: PayloadAction<{}>) => {
      state.isSuccessful = false;
      state.result = action.payload;
    },

    deleteStadeAction: (state: any, action: PayloadAction<{}>) => {
      state.stades = state.stades.filter((e: Stade) => e.id != action.payload);
      state.isSuccessful = true;
    },
    addStadeAction: (state: any, action: PayloadAction<{}>) => {
      state.stades.push(action.payload);
      console.log(state.stades);
      state.isValid = true;
      state.isSuccessful = true;
    },
    status: (state: any, action: PayloadAction<boolean>) => {
      state.isValid = action.payload;
    },
    updateStadeAction: (state: any, action: PayloadAction<Stade>) => {
      let id = state.stades.findIndex((e: Stade) => e.id == action.payload.id);
      if (id != -1) state.stades[id] = action.payload;
      state.isValid = true;
      console.log(id, action.payload);
      state.isSuccessful = true;
    },
  },
});

export const {
  getAllStadeRequestAction,
  getAllStadeSuccessAction,
  getAllStadeFailedAction,
  deleteStadeAction,
  addStadeAction,
  updateStadeAction,
  status,
} = StadeSlice.actions;

export default StadeSlice.reducer;
