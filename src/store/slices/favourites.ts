import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Character } from "../../types";
import { RootState } from "../store";

const initialState: Character[] = [];

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourite: (state, action: PayloadAction<Character>) => {
      state.push(action.payload);
    },

    deleteFromFavourite: (state, action: PayloadAction<Character>) => {
      return state.filter(
        (elem: Character) => elem.name !== action.payload.name,
      );
    },

    deleteAllFavourites: () => {
      return [];
    },
  },
});

export const { addToFavourite, deleteFromFavourite, deleteAllFavourites } =
  favouriteSlice.actions;

export const favouritesUsers = (state: RootState) => state.favourites;

export default favouriteSlice.reducer;
