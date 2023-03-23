import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getBooks, setBooks, setBooksArray } from '../../redux/slices/booksSlice'
import { setSearchValue } from '../../redux/slices/searchSlice'
import Input from '../../UI/Input'
import style from './index.module.css'

const Search = ({className, placeholder}) => {
   const dispatch = useDispatch()
   const { searchValue } = useSelector(state => state.searchSlice)
   const [ debounce, setDebounce ] = useState(true)
   const [ err, setErr ] = useState(null)

   useEffect(() => {
      if(err){
         setErr(null)
      }
   },[searchValue])

   useEffect(() => {
      setTimeout(() => {setDebounce(true)}, 2000)
   },[debounce])

   const validationInput = () => {

      if(searchValue && debounce){
         setDebounce(false)
         dispatch(setBooks(null))
         dispatch(setBooksArray([]))
         dispatch(getBooks([searchValue]))
      }
      else if(!searchValue){
         setErr('Enter a request')
      }

   }

   const handleKeyDown = (e) => {
      if(e.key === 'Enter'){
         validationInput() 
      }
   }

   return(
      <div className={`${style.search} ${className}`}>
         <div className={style.err}>{err}</div>
         <Input 
            className={`${style.input} ${err && style.inputErr}`} 
            placeholder={placeholder || 'Search'}
            setValue={(prop) => dispatch(setSearchValue(prop))}
            value={searchValue}
            onKeyDown={handleKeyDown}
         />
         <button 
            className={style.searchBtn} 
            onClick={validationInput}
            disabled={!searchValue}
         >
            <img className={style.searchBtn_icon} src="/images/search.png" alt="" />
         </button>
         {searchValue && <img className={style.clearBtn} src="/images/close.png" alt="" onClick={() => dispatch(setSearchValue(''))}/>} 
      </div>
   )
}

export default Search 