import {configureStore} from '@reduxjs/toolkit'
import allPlayerSlice from './reducer/allPlayerSlice';


const AppReduxStore = configureStore({ reducer: {
    allPlayers: allPlayerSlice
   
} });

export type RootState = ReturnType<typeof AppReduxStore.getState>

export type AppDispatch = typeof AppReduxStore.dispatch

export default AppReduxStore;