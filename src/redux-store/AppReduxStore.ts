import { configureStore } from "@reduxjs/toolkit";
import ArbitreSlice from "./reducer/ArbitreSlice";
import ClubSlice from "./reducer/ClubSlice";
import CompetitionSlice from "./reducer/CompetitionSlice";
import CountrySlice from "./reducer/CountrySlice";
import allPlayerSlice from "./reducer/PlayerSlice";
import SaisonSlice from "./reducer/SaisionSlice";
import StadeSlice from "./reducer/StadeSlice";

const AppReduxStore = configureStore({
  reducer: {
    allPlayers: allPlayerSlice,
    allClubs: ClubSlice,
    allCountries: CountrySlice,
    allCompetitions: CompetitionSlice,
    allArbitres: ArbitreSlice,
    allStades: StadeSlice,
    allSaison: SaisonSlice,
  },
});

export type RootState = ReturnType<typeof AppReduxStore.getState>;

export type AppDispatch = typeof AppReduxStore.dispatch;

export default AppReduxStore;
