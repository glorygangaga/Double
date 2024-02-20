import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TypeState } from "../../models";
import { IBought } from "../../models";

const initialState:IBought = [];

export const inBusketSlice = createSlice({
  name: 'busket',
  initialState,
  reducers: {
    handleBusket: (state, action: PayloadAction<TypeState[]>): void => {
      const pizzas = action.payload;
      const isIn = state.some(item => item[0].id === pizzas[0].id && item[1].id === pizzas[1].id);
      if (isIn) {
        const index = state.findIndex(item => item[0].id === pizzas[0].id && item[1].id === pizzas[1].id);
        if (index !== -1) state.splice(index, 1);
      } else state.push(pizzas);
    },
    deleteAll: (state): void => {
      state.splice(0, state.length);
    }
  }
})

export const {actions, reducer} = inBusketSlice;