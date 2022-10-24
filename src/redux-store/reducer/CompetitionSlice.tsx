import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import dataCompetitions from "../../assets/json/competition.json";
import {
  Competition,
  CompetitionStateInterface,
} from "../../interface/redux-state/CompetitionStateInterface";

const initialState: CompetitionStateInterface = {
  competitions: [],
  isLoading: false,
  isSuccessful: false,
  isValid: false,
  error: {},
};

export const CompetitionSlice = createSlice({
  name: "allCompetition",
  initialState,
  reducers: {
    getAllCompetitionRequestAction: (state: any) => {
      state.isLoading = true;
    },
    getAllCompetitionSuccessAction: (
      state: any,
      action: PayloadAction<any>
    ) => {
      state.competitions = dataCompetitions.value;

      state.isLoading = false;
      state.isSuccessful = true;
    },

    getAllCompetitionFailedAction: (state: any, action: PayloadAction<{}>) => {
      state.isSuccessful = false;
      state.result = action.payload;
    },
    // deletePlayerAction({payload:22})
    deleteCompetitionAction: (state: any, action: PayloadAction<{}>) => {
      state.competitions = state.competitions.filter(
        (e: Competition) => e.id != action.payload
      );
      state.isSuccessful = true;
    },
    addCompetitionAction: (state: any, action: PayloadAction<{}>) => {
      state.competitions.push(action.payload);
      console.log(state.competitions);
      state.isSuccessful = true;
      state.isValid = true;
    },
    status: (state: any, action: PayloadAction<boolean>) => {
      state.isValid = action.payload;
    },
    updateCompetitionAction: (
      state: any,
      action: PayloadAction<Competition>
    ) => {
      let id = state.competitions.findIndex(
        (e: Competition) => e.id == action.payload.id
      );
      if (id != -1) state.competitions[id] = action.payload;
      console.log(id, action.payload);
      state.isValid = true;
      state.isSuccessful = true;
    },
  },
});

export const {
  getAllCompetitionRequestAction,
  getAllCompetitionSuccessAction,
  getAllCompetitionFailedAction,
  deleteCompetitionAction,
  addCompetitionAction,
  updateCompetitionAction,
  status,
} = CompetitionSlice.actions;

export default CompetitionSlice.reducer;
