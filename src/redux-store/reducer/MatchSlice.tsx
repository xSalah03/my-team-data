import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import dataPlayers from "../../assets/json/players.json";
import { Match, MatchStateInterface } from "../../interface/redux-state/MatchStateInterface";

const initialState: MatchStateInterface = {
    matchs: [],
    isLoading: false,
    isSuccessful: false,
    isValid: false,
    error: {},
};

export const MatchSlice = createSlice({
    name: "allMatchs",
    initialState,
    reducers: {
        getAllPlayerRequestAction: (state: any) => {
            state.isLoading = true;
        },
        getAllPlayerSuccessAction: (state: any, action: PayloadAction<any>) => {
            state.matchs = dataPlayers.value;

            state.isLoading = false;
            state.isSuccessful = true;
        },

        getAllPlayerFailedAction: (state: any, action: PayloadAction<{}>) => {
            state.isSuccessful = false;
            state.result = action.payload;
        },
        // deletePlayerAction({payload:22})
        deletePlayerAction: (state: any, action: PayloadAction<{}>) => {
            state.matchs = state.matchs.filter(
                (e: Match) => e.id != action.payload
            );
            state.isSuccessful = true;
        },
        addPlayerAction: (state: any, action: PayloadAction<{}>) => {
            state.matchs.push(action.payload);
            console.log(state.matchs);
            state.isSuccessful = true;
        },
        status: (state: any, action: PayloadAction<boolean>) => {
            state.isValid = action.payload;
        },
        updatePlayerAction: (state: any, action: PayloadAction<Match>) => {
            let id = state.matchs.findIndex(
                (e: Match) => e.id == action.payload.id
            );
            if (id != -1) state.matchs[id] = action.payload;
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
} = MatchSlice.actions;

export default MatchSlice.reducer;
