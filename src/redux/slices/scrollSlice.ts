import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ScrollSliceState = {
   scroll: number
}

const initialState: ScrollSliceState = {
   scroll: 0
}

export const scrollSlice = createSlice({
  name: 'scrollSlice',
  initialState,
  reducers: {

   setScroll: (state, action: PayloadAction<number>) => {
      state.scroll = action.payload
   }

  },
})

export const { setScroll } = scrollSlice.actions

export const scrollSelector = (state: RootState) => state.scrollSlice

export default scrollSlice.reducer