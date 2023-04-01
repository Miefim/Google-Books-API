import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type FetchBooksArg = [
   string,
   string,
   string,
   number?
]

export const getBooks = createAsyncThunk<Response, FetchBooksArg, {rejectValue: string}>("booksSlice/getBooks", 
   async ([searchValue, category = 'all', sort = 'relevance', startIndex = 0], {rejectWithValue}) => {

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

type BookOptions = {
   authors?: string[]
   categories?: string[]
   description?: string
   imageLinks?: {
      smallThumbnail: string
      thumbnail: string
   }
   title?: string
}

export type Book = {
   id: string
   volumeInfo: BookOptions
}

type Response = {
   items: Book[]
   kind: string
   totalItems: number
}

interface booksSliceState {
   books: Response | null
   booksArray: Book[]
   isLoading: boolean
   error: string | null
   selectedBook: Book | null
}

const initialState: booksSliceState = {
   books: null,
   booksArray: [],
   isLoading: false,
   error: null,
   selectedBook: null
}

export const booksSlice = createSlice({
   name: 'booksSlice',
   initialState,

   reducers: {

      setBooks: (state, action: PayloadAction<null>) => {
         state.books = action.payload
      },

      setBooksArray:(state, action: PayloadAction<[]>) => {
         state.booksArray = action.payload
      }, 

      setSelectedBook:(state, action: PayloadAction<Book>) => {
         state.selectedBook = action.payload
      },

   },

   extraReducers: (builder) => {
      builder.addCase(getBooks.pending, (state) => {
         state.isLoading = true
         state.error = null
      })

      builder.addCase(getBooks.fulfilled, (state, action) => {
         state.isLoading = false
         state.books = action.payload
         state.booksArray = [...state.booksArray, ...action.payload.items]
      })

      builder.addCase(getBooks.rejected, (state, action) => {
         if (action.payload){
            state.isLoading = false
            state.error = action.payload
         }
      })
   }
})

export const booksSelector = (state: RootState) => state.booksSlice

export const { setBooks, setBooksArray, setSelectedBook } = booksSlice.actions

export default booksSlice.reducer