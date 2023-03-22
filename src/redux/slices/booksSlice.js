import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   books: [],
   category: 0,
   sort: 0,
}

export const booksSlice = createSlice({
  name: 'booksSlice',
  initialState,
  reducers: {
   setbooks: (state, action) => {
      state.books = action.payload
   },

   setCategory: (state, action) => {
      state.category = action.payload
   },

   setSort: (state, action) => {
      state.sort = action.payload
   }
  },
})

export const { setbooks, setCategory, setSort } = booksSlice.actions

export default booksSlice.reducer