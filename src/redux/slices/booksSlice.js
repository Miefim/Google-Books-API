import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   books: null,
   booksArray: [],
   isLoading: false,
   error: null
}

export const getBooks = createAsyncThunk("booksSlice/getBooks", 
   async ([searchValue, startIndex], {rejectWithValue}) => {
      try {

         const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyA2F-Ta_4Lm8tn3KROJ5gLO-jvqfJ2c8ew&startIndex=${startIndex ? startIndex : 0}&maxResults=30`)
         let result = await response.json() 
         
         if(result.hasOwnProperty('items')){
            return result
         }
         else{
            return result = {...result, items: []}
         }  
          
      } 
      catch (error) {

         return rejectWithValue("Ошибка сервера(")  

      }
   }
)

export const booksSlice = createSlice({
   name: 'booksSlice',
   initialState,

   reducers: {

      setBooks: (state, action) => {
         state.books = action.payload
      },

      setBooksArray:(state, action) => {
         state.booksArray = action.payload
      }, 

   },

   extraReducers: {

      [getBooks.pending]: (state) => {
         state.isLoading = true
         state.error = null
      },
      [getBooks.fulfilled]: (state, action) => {
         state.isLoading = false
         state.books = action.payload
         state.booksArray = [...state.booksArray, ...action.payload.items]
      },
      [getBooks.rejected]: (state, action) => {
         state.isLoading = false
         state.error = action.payload
      },

   }
})

export const { setBooks, setBooksArray } = booksSlice.actions

export default booksSlice.reducer