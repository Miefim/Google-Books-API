import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   searchValue: '',
   err: null,
}

export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {

   setSearchValue: (state, action) => {
      state.searchValue = action.payload
   },

   setErr: (state, action) => {
      state.err = action.payload
   }

  },
})

export const { setSearchValue, setErr } = searchSlice.actions

export default searchSlice.reducer