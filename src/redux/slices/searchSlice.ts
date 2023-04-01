import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type SearchSliceState = {
   searchValue: string
   err: string | null
}

const initialState: SearchSliceState = {
   searchValue: '',
   err: null,
}

export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {

   setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
   },

   setErr: (state, action: PayloadAction<string | null>) => {
      state.err = action.payload
   }

  },
})

export const { setSearchValue, setErr } = searchSlice.actions

export const searchSelector = (state: RootState) => state.searchSlice

export default searchSlice.reducer