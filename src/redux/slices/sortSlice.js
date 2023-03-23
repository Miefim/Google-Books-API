import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   category: 'all',
   sort: 'relevance',
}

export const sortSlice = createSlice({
  name: 'sortSlice',
  initialState,
  reducers: {

   setCategory: (state, action) => {
      state.category = action.payload
   },

   setSort: (state, action) => {
      state.sort = action.payload
   }

  },
})

export const { setCategory, setSort } = sortSlice.actions

export default sortSlice.reducer