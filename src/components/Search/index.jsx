import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getBooks, setBooks, setBooksArray } from '../../redux/slices/booksSlice'
import Input from '../../UI/Input'
import style from './index.module.css'

const Search = ({className, placeholder}) => {
   const dispatch = useDispatch()
   const [searchValue, setSearchValue] = useState('')
   const [err, setErr] = useState(null)

   useEffect(() => {
      if(err){
         setErr(null)
      }
   },[searchValue])

   const validationInput = async() => {

      if(searchValue){
         dispatch(setBooks(null))
         dispatch(setBooksArray([]))
         await dispatch(getBooks([searchValue]))
      }
      else {
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
            setValue={setSearchValue}
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
      </div>
   )
}

export default Search 