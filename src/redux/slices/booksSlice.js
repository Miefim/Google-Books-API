import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   books: null,
   booksArray: [],
   isLoading: false,
   error: null,
   selectedBook: null
}

export const getBooks = createAsyncThunk("booksSlice/getBooks", 
   async ([searchValue, startIndex = 0, category = 'all', sort = 'relevance'], {rejectWithValue}) => {
      try {

         const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}${category !== 'all' ? `+subject:${category}` : ''}&orderBy=${sort}&key=${process.env.REACT_APP_GOOGLE_BOOK_API_KEY}&startIndex=${startIndex}&maxResults=30`)
         let result = await response.json() 
         
         if(result.hasOwnProperty('items')){
            return result
         }
         else{
            return result = {...result, items: []}
         }  
          
      } 
      catch (error) {

         return rejectWithValue("Server error(")  

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

      setSelectedBook:(state, action) => {
         state.selectedBook = action.payload
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

export const { setBooks, setBooksArray, setSelectedBook } = booksSlice.actions

export default booksSlice.reducer