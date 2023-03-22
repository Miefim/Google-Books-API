import { useEffect, useState } from 'react'

import Input from '../../UI/Input'
import style from './index.module.css'

const Search = ({className, placeholder}) => {
   const [searchValue, setSearchValue] = useState('')
   const [err, setErr] = useState(null)

   useEffect(() => {
      if(err){
         setErr(null)
      }
   },[searchValue])

   const validationInput = () => {
      if(searchValue){
         console.log(searchValue)
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