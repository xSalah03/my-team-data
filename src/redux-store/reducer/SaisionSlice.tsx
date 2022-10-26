import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import dataSaisons from "../../assets/json/saisons.json";
import {
  Saison,
  SaisonStateInterface,
} from "../../interface/redux-state/SaisonStateInterface";
const initialState: SaisonStateInterface = {
  saisons: [],
  isLoading: false,
  isSuccessful: false,
  isValid: false,
  error: {},
};

export const SaisonSlice = createSlice({
  name: "allSaison",
  initialState,
  reducers: {
    getAllSaisonRequestAction: (state: any) => {
      state.isLoading = true;
    },
    getAllSaisonSuccessAction: (state: any, action: PayloadAction<any>) => {
      state.saisons = dataSaisons.value;
      state.isLoading = false;
      state.isSuccessful = true;
    },

    getAllSaisonFailedAction: (state: any, action: PayloadAction<{}>) => {
      state.isSuccessful = false;
      state.result = action.payload;
    },

    deleteSaisonAction: (state: any, action: PayloadAction<{}>) => {
      state.saisons = state.saisons.filter((e: Saison) => e.id != action.payload);
      state.isSuccessful = true;
    },
    addSaisonAction: (state: any, action: PayloadAction<{}>) => {
      state.saisons.push(action.payload);
      console.log(state.saisons);
      state.isValid = true;
      state.isSuccessful = true;
    },
    status: (state: any, action: PayloadAction<boolean>) => {
      state.isValid = action.payload;
    },
    updateSaisonAction: (state: any, action: PayloadAction<Saison>) => {
      let id = state.saisons.findIndex((e: Saison) => e.id == action.payload.id);
      if (id != -1) state.saisons[id] = action.payload;
      state.isValid = true;
      console.log(id, action.payload);
      state.isSuccessful = true;
    },
    updateSwitch: (state: any, action: PayloadAction<number>) => {
      state.saisons = state.saisons.map((e:Saison)=>{
        return {...e,active:e.id == action.payload ? e.active = 1 : e.active = 0 } ;
      });
    }
  },
});

export const {
  getAllSaisonRequestAction,
  getAllSaisonSuccessAction,
  getAllSaisonFailedAction,
  deleteSaisonAction,
  addSaisonAction,
  updateSaisonAction,
  updateSwitch,
  status,
} = SaisonSlice.actions;

export default SaisonSlice.reducer;
