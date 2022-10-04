import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import { AllPlayerStateInterface } from '../../interface/redux-state/AllPlayerStateInterface';

const initialState: AllPlayerStateInterface = {
    Players: [{
      fullname:"Anas",
      age:21
    }],
    isLoading: false,
    isSuccessful: false,
    error: {}
}

export const allPlayerSlice = createSlice({
    name: 'allPlayer',
    initialState,
    reducers: {
        getAllPlayerRequestAction: (state: any) => {
            state.isLoading = true;
        },
        getAllPlayerSuccessAction: (state: any, action: PayloadAction<any>) => {
            state.Players = action.payload
            state.isLoading = false;
            state.isSuccessful = true
        },
        
        getAllPlayerFailedAction: (state: any, action: PayloadAction<{}>) => {
            state.isSuccessful = false
            state.result = action.payload
        },
    },
})

export const {
    getAllPlayerRequestAction,
    getAllPlayerSuccessAction,
    getAllPlayerFailedAction
} = allPlayerSlice.actions

export default allPlayerSlice.reducer