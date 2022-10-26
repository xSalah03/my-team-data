import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import dataArbitres from "../../assets/json/arbitre.json";
import { Arbitre, ArbitreStateInterface } from "../../interface/redux-state/ArbitreStateInterface";

const initialState: ArbitreStateInterface = {
  arbitres: [],
  isLoading: false,
  isSuccessful: false,
  isValid: false,
  error: {},
};

export const ArbitreSlice = createSlice({
  name: "allArbitre",
  initialState,
  reducers: {
    getAllArbitreRequestAction: (state: any) => {
      state.isLoading = true;
    },
    getAllArbitreSuccessAction: (state: any, action: PayloadAction<any>) => {
      state.arbitres = dataArbitres.value;
      state.isLoading = false;
      state.isSuccessful = true;
    },

    getAllArbitreFailedAction: (state: any, action: PayloadAction<{}>) => {
      state.isSuccessful = false;
      state.result = action.payload;
    },

    deleteArbitreAction: (state: any, action: PayloadAction<{}>) => {
      state.arbitres = state.arbitres.filter((e: Arbitre) => e.id != action.payload);
      state.isSuccessful = true;
    },
    addArbitreAction: (state: any, action: PayloadAction<{}>) => {
      state.arbitres.push(action.payload);
      console.log(state.arbitres);
      state.isSuccessful = true;
      state.isValid = true;
    },
    status: (state: any, action: PayloadAction<boolean>) => {
      state.isValid = action.payload;
    },
    updateArbitreAction: (
      state: any,
      action: PayloadAction<Arbitre>
    ) => {
      let id = state.arbitres.findIndex(
        (e: Arbitre) => e.id == action.payload.id
      );
      if (id != -1) state.arbitres[id] = action.payload;
      console.log(id, action.payload);
      state.isValid = true;
      state.isSuccessful = true;
    },
  },
});

export const {
  getAllArbitreRequestAction,
  getAllArbitreSuccessAction,
  getAllArbitreFailedAction,
  deleteArbitreAction,
  addArbitreAction,
  updateArbitreAction,
  status,
} = ArbitreSlice.actions;

export default ArbitreSlice.reducer;
