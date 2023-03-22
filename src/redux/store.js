import { configureStore } from "@reduxjs/toolkit";

import booksSlice from './slices/booksSlice'
import sortSlice from './slices/sortSlice'

export const store = configureStore({
   reducer: {
      booksSlice,
      sortSlice
   }
 })