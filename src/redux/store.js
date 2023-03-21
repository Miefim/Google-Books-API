import { configureStore } from "@reduxjs/toolkit";

import booksSlice from './slices/booksSlice'

export const store = configureStore({
   reducer: {
      booksSlice
   }
 })