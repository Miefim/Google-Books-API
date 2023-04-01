import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import scrollSlice from "./slices/scrollSlice";
import booksSlice from './slices/booksSlice'
import sortSlice from './slices/sortSlice'
import searchSlice from './slices/searchSlice'

export const store = configureStore({
   reducer: {
      booksSlice,
      sortSlice,
      scrollSlice,
      searchSlice
   }
})

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()