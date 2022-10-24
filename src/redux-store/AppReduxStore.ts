import { configureStore } from "@reduxjs/toolkit";
import ClubSlice from "./reducer/ClubSlice";
import CompetitionSlice from "./reducer/CompetitionSlice";
import CountrySlice from "./reducer/CountrySlice";
import allPlayerSlice from "./reducer/PlayerSlice";

const AppReduxStore = configureStore({
  reducer: {
    allPlayers: allPlayerSlice,
    allClubs: ClubSlice,
    allCountries: CountrySlice,
    allCompetitions: CompetitionSlice,
  },
});

export type RootState = ReturnType<typeof AppReduxStore.getState>;

export type AppDispatch = typeof AppReduxStore.dispatch;

export default AppReduxStore;
