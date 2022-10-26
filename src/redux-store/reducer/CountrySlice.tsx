import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import dataCountries from "../../assets/json/country.json";
import { Country, CountryStateInterface } from "../../interface/redux-state/CountyStateInterface";

const initialState: CountryStateInterface = {
  countries: [],
  isLoading: false,
  isSuccessful: false,
  error: {},
};

export const CountrySlice = createSlice({
  name: "allCountry",
  initialState,
  reducers: {
    getAllCountryRequestAction: (state: any) => {
      state.isLoading = true;
    },
    getAllCountrySuccessAction: (state: any, action: PayloadAction<any>) => {
      state.countries = dataCountries.value;
      state.isLoading = false;
      state.isSuccessful = true;
    },

    getAllCountryFailedAction: (state: any, action: PayloadAction<{}>) => {
      state.isSuccessful = false;
      state.result = action.payload;
    },
    // deletePlayerAction({payload:22})
    deleteCountryAction: (state: any, action: PayloadAction<{}>) => {
      state.country = state.country.filter(
        (e: Country) => e.country != action.payload
      );
      state.isSuccessful = true;
    },
  },
});

export const {
  getAllCountryRequestAction,
  getAllCountrySuccessAction,
  getAllCountryFailedAction,
  deleteCountryAction,
} = CountrySlice.actions;

export default CountrySlice.reducer;
