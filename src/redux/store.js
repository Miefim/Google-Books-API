import { configureStore } from "@reduxjs/toolkit";

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