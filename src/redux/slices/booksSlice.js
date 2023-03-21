import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   books: [],
}

export const booksSlice = createSlice({
  name: 'booksSlice',
  initialState,
  reducers: {
   setbooks: (state, action) => {
      state.books = action.payload
   }
  },
})

export const { setbooks } = booksSlice.actions

export default booksSlice.reducer