import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import dataClubs from "../../assets/json/clubs.json";
import { Club, ClubStateInterface } from "../../interface/redux-state/ClubStateInterface";

const initialState: ClubStateInterface = {
  clubs: [],
  isLoading: false,
  isSuccessful: false,
  error: {},
};

export const ClubSlice = createSlice({
  name: "allClub",
  initialState,
  reducers: {
    getAllClubRequestAction: (state: any) => {
      state.isLoading = true;
    },
    getAllClubSuccessAction: (state: any,action: PayloadAction<any>) => {
      state.clubs = dataClubs.value;

      state.isLoading = false;
      state.isSuccessful = true;
    },

    getAllClubFailedAction: (state: any, action: PayloadAction<{}>) => {
      state.isSuccessful = false;
      state.result = action.payload;
    },
    // deletePlayerAction({payload:22})
    deleteClubAction: (state: any, action: PayloadAction<{}>) => {
      state.clubs = state.clubs.filter(
        (e: Club) => e.id != action.payload
      );
      state.isSuccessful = true;
    },
    changeCountry: (state: any,action: PayloadAction<string> )=> {
      state.clubs = dataClubs.value;
      console.log(action.payload);
      state.isLoading = false;
      state.isSuccessful = true;
    },
  },
});

export const {
  getAllClubRequestAction,
  getAllClubSuccessAction,
  getAllClubFailedAction,
  deleteClubAction,
  changeCountry,
} = ClubSlice.actions;

export default ClubSlice.reducer;
