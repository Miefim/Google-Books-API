import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getBooks, setBooks, setBooksArray } from '../../redux/slices/booksSlice'
import { setSearchValue } from '../../redux/slices/searchSlice'
import Input from '../../UI/Input'
import style from './index.module.css'

const Search = ({className, placeholder}) => {
   const dispatch = useDispatch()
   const { searchValue } = useSelector(state => state.searchSlice)
   const { isLoading } = useSelector(state => state.booksSlice)
   const [ debounce, setDebounce ] = useState(true)
   const [ localValue, setLocalValue ] = useState('')
   const [ err, setErr ] = useState(null)

   useEffect(() => {
      if(err){
         setErr(null)
      }
   },[localValue])

   useEffect(() => {
      if(!localValue && localValue !== searchValue){
         setLocalValue(searchValue)
      }
   },[isLoading])

   useEffect(() => {
      setTimeout(() => {setDebounce(true)}, 2000)
   },[debounce])

   const validationInput = () => {
      const localValueTrim = localValue.trim()
      if(localValueTrim && debounce){
         setDebounce(false)
         dispatch(setSearchValue(localValue))
         dispatch(setBooks(null))
         dispatch(setBooksArray([]))
         dispatch(getBooks([localValue]))
      }
      else if(!localValueTrim){
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
            setValue={setLocalValue}
            value={localValue}
            onKeyDown={handleKeyDown}
         />
         <button 
            className={style.searchBtn} 
            onClick={validationInput}
            disabled={!localValue || err}
         >
            <img className={style.searchBtn_icon} src="/images/search.png" alt="" />
         </button>
         {localValue.trim() && <img className={style.clearBtn} src="/images/close.png" alt="" onClick={() => setLocalValue('')}/>} 
      </div>
   )
}

export default Search 