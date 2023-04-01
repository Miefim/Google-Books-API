import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '../../redux/store'
import { getBooks, setBooks, setBooksArray, booksSelector } from '../../redux/slices/booksSlice'
import { setSearchValue, setErr, searchSelector } from '../../redux/slices/searchSlice'
import { sortSelector } from '../../redux/slices/sortSlice'
import Input from '../../UI/Input'
import style from './index.module.css'

type SearchProps = {
   className?: string,
   placeholder?: string
}

const Search: React.FC<SearchProps> = ({className, placeholder}) => {
   const dispatch = useAppDispatch()
   const { searchValue, err } = useSelector(searchSelector)
   const { isLoading } = useSelector(booksSelector)
   const { category, sort } = useSelector(sortSelector)
   const [ debounce, setDebounce ] = useState<boolean>(true)
   const [ localValue, setLocalValue ] = useState<string>('')

   useEffect(() => {
      if(err){
         dispatch(setErr(null))
      }
   },[localValue])

   useEffect(() => {
      if(!localValue || localValue !== searchValue){
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
         dispatch(getBooks([localValue, category, sort]))
      }
      else if(!localValueTrim){
         dispatch(setErr('Enter a request'))
      }
   }

   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
            disabled={Boolean(!localValue || err)}
         >
            <img className={style.searchBtn_icon} src="/images/search.png" alt="" />
         </button>
         {localValue.trim() && <img className={style.clearBtn} src="/images/close.png" alt="" onClick={() => setLocalValue('')}/>} 
      </div>
   )
}

export default Search 