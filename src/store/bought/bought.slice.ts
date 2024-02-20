import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TypeState, IBought } from "../../models";

const initialState: TypeState[][][] = [];

export const boughtSlice = createSlice({
  name: 'bought',
  initialState,
  reducers: {
    Bought: (state, action:PayloadAction<IBought>) => {
      state.push(action.payload);
    }
  }
})

export const {actions, reducer} = boughtSlice;