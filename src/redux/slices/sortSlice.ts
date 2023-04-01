import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type SortSliceState = {
   category: string
   sort: string
}

const initialState: SortSliceState = {
   category: 'all',
   sort: 'relevance'
}

export const sortSlice = createSlice({
  name: 'sortSlice',
  initialState,
  reducers: {

   setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
   },

   setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
   }

  },
})

export const { setCategory, setSort } = sortSlice.actions

export const sortSelector = (state: RootState) => state.sortSlice

export default sortSlice.reducer