import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   scroll: 0
}

export const scrollSlice = createSlice({
  name: 'scrollSlice',
  initialState,
  reducers: {

   setScroll: (state, action) => {
      state.scroll = action.payload
   }

  },
})

export const { setScroll } = scrollSlice.actions

export default scrollSlice.reducer