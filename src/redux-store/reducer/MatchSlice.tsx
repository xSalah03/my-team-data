import { current, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
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
        getAllMatchRequestAction: (state: any) => {
            state.isLoading = true;
        },
        getAllMatchSuccessAction: (state: any, action: PayloadAction<any>) => {
            state.matchs = [];

            state.isLoading = false;
            state.isSuccessful = true;
        },

        getAllMatchFailedAction: (state: any, action: PayloadAction<{}>) => {
            state.isSuccessful = false;
            state.result = action.payload;
        },
        // deleteMatchAction({payload:22})
        deleteMatchAction: (state: any, action: PayloadAction<{}>) => {
            state.matchs = state.matchs.filter(
                (e: Match) => e.id != action.payload
            );
            state.isSuccessful = true;
        },
        addMatchAction: (state: MatchStateInterface, action: PayloadAction<Match>) => {
            state.matchs.push(action.payload);
            console.log(current(state));
            state.isSuccessful = true;
        },
        status: (state: any, action: PayloadAction<boolean>) => {
            state.isValid = action.payload;
        },
        updateMatchAction: (state: any, action: PayloadAction<Match>) => {
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
    getAllMatchRequestAction,
    getAllMatchSuccessAction,
    getAllMatchFailedAction,
    deleteMatchAction,
    addMatchAction,
    updateMatchAction,
    status,
} = MatchSlice.actions;

export default MatchSlice.reducer;
